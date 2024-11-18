import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const { vantageApiKey} = require('../config.json');
// Separate component for each stock item
const StockItem = ({ title, price }) => (
  <View style={styles.StocksView}>
    <View style={styles.PortfolioAlign}>
      <Text style={styles.StocksText}>{title}</Text>
      <Text style={styles.StocksText}>{price}</Text>
    </View>
  </View>
);

export default function Portfolio() {
  const navigation = useNavigation();
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const dbRef = collection(FIRESTORE_DB, 'Stocks');

    const unsubscribe = onSnapshot(dbRef, (snapshot) => {
      const stockPromises = snapshot.docs.map(async (doc) => {
        const symbol = doc.data().Stock.symbol;
        const price = await fetchStockPrice(symbol);
        return { id: doc.id, title: symbol, price };
      });

      Promise.all(stockPromises).then((stockData) => {
        setStocks(stockData);
      }).catch((error) => {
        console.error('Error fetching stock data:', error);
      });
    });

    return () => unsubscribe();
  }, []);

  const fetchStockPrice = async (symbol) => {
    // Fetch stock price from an API or other data source
    // Example: Fetch stock price from Alpha Vantage API
    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${vantageApiKey}`);
      const data = await response.json();
      const rawPrice = data['Global Quote']['05. price'];
      const formattedPrice = parseFloat(rawPrice).toFixed(2);
      return `$${formattedPrice}`;}
         
      catch (error) {
      console.error(`Error fetching price for ${symbol}:`, error);
      return null;
    }
  };

  return (
    <View style={styles.Main}>
      <View style={styles.MainHeadingView}>
        <Text style={styles.MainHeadingText}>StocksNHudds</Text>
      </View>
      
      <View style={styles.AppPage}>
        <Text style={styles.WelcomeHeadingText}>Portfolio</Text>

        {stocks.length > 0 ? (
          <FlatList
            style={styles.StocksFlatList}
            data={stocks}
            renderItem={({ item }) => <StockItem title={item.title} price={item.price} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.EmptyPortfolioText}>
            You have no saved stocks!{'\n\n'}
            Go to the home page to see trending stocks or search for stocks in the search tab
          </Text>
        )}
      </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    Main: {
      flex: 1,
      backgroundColor: 'black',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    MainHeadingView: {
      flex: 1,
      width: '100%',
      backgroundColor: "#99ccff",
    },
    
    MainHeadingText: {
      paddingTop: '15px',
      fontSize: 35,
      color: 'black',
      textAlign: 'center',
    },

    WelcomeHeadingText: {
      paddingBottom: "5px",
      fontSize: 35,
      color: 'black',
      textAlign: 'center',
    },
  
    SearchBar: {
      backgroundColor: 'white',
      marginHorizontal: 50,
      //textAlign: "center",
      borderStyle: "solid"
    },
  
    SecondaryHeadingText: {
      fontSize: 25,
      color: 'black',
      textAlign: 'center',
      marginTop: '10px',
      paddingBottom: "10px"
    },
  
    StocksFlatList: {
      paddingHorizontal: '20px',
      paddingTop: '5px',
      paddingBottom: '5px',
      border: "solid",
      borderWidth: 1
    },

    StocksView: {
      width: '100%',
      backgroundColor: 'white',
    },

    PortfolioAlign: {
      justifyContent: 'space-evenly',
      flexDirection: 'row'
    },

    StocksText: {
      fontSize: 17,
      color: 'black',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  
    AppPage: {
      flex: 8,
      width: '100%',
      backgroundColor: 'white',
    },

    EmptyPortfolioText:
    {
      flex: 1, 
      paddingTop: "200px",
      textAlign: "center",
      fontSize: 20,
    },
  });