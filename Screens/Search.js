import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Button, TextInput, ScrollView, FlatList, Text, View, Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';

const { vantageApiKey, newsApiKey } = require('../config.json');

export default function Search() {
    const navigation = useNavigation();
    const [symbol, setSymbol] = useState('AAPL');
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    const [DATA, setData] = useState([]);

    const dbRef = collection(FIRESTORE_DB, 'Stocks');

    const NewDATA = [];

    const subscriber = onSnapshot(dbRef, {
      next: (snapshot) => {
        const new_items = snapshot.docs.map((doc, index) => ({
          id: String(index + 1),
          title: doc.data().Stock.symbol,
        }));
    
        // Append each new_item to the existing DATA array
        new_items.forEach((new_item) => {
          NewDATA.push({ id: new_item.id, title: new_item.title });
        });

        setData(NewDATA);
    
        // Print the updated DATA array
        console.log(DATA);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });

    const saveStock = async (Ticker) => {
      let symbolExists = false;
      for (const item of DATA) {
        if (item.title === symbol) {
          symbolExists = true;
          break;
        }
      }
      
      if (!symbolExists)
      {
        try {
          const stockRef = await addDoc(collection(FIRESTORE_DB, 'Stocks'), {
            Stock: Ticker
          });
          console.log('Stock written with ID: ', stockRef.id);
        } catch (e) {
          console.error('Error adding Stock: ', e);
        }
      }
    };
    
    const handleSymbolChange = (text) => {
      setSymbol(text.toUpperCase());
    }

    const handleSearchPress = async () => {
      setLoading(true);
      
      try
      {
        // Get stock price
        const responsePrice = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${vantageApiKey}`);
        const dataPrice = await responsePrice.json();

        if (dataPrice['Global Quote']) {
          const newPrice = parseFloat(dataPrice['Global Quote']['05. price']).toFixed(2);
          setPrice(newPrice);
        } else {
          setPrice(null);
        }

        // Get stock news         
        const responseNews = await fetch(`https://newsapi.org/v2/everything?q=${symbol}&apiKey=${newsApiKey}`);
        const dataNews = await responseNews.json();

        if (dataNews.articles) {
          setNews(dataNews.articles);
        } else {
          setNews([]);
        }
      }
      catch (error)
      {
        console.error(error);
        setPrice(null);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      handleSearchPress();
    }, []);

    return (
      <View style={styles.Main}>
        <View style={styles.MainHeadingView}>
  
          <Text style={styles.MainHeadingText}>StocksNHudds</Text>
  
        </View>
        
        <View style={styles.AppPage}>
            <Text style={styles.WelcomeHeadingText}>Search</Text>
            <TextInput style={styles.SearchBar} placeholder = ' Search' value={symbol} onChangeText={handleSymbolChange}></TextInput>
            <Button title="Search" onPress={handleSearchPress} disabled={loading} />
            {price && !loading && <Button title="Favourite" onPress={()=>saveStock({symbol})} disabled={loading} />}

            {loading && <Text style={{ marginHorizontal: 150, fontSize: 18, marginTop: 20 }}>Loading...</Text>}
            {price && (
              <Text style={{ marginHorizontal: 150, fontSize: 24, marginTop: 20 }}>
                {symbol}: ${price}
              </Text>
            )}
            {!price && !loading && <Text style={{ marginHorizontal: 150, fontSize: 18, marginTop: 20 }}>No data available for {symbol}</Text>}

            <ScrollView style={{ flex: 1, marginTop: 20 }}>
              {news.map((article, index) => (
                <View key={index} style={{ backgroundColor: '#F5F5F5', padding: 10, margin: 10 }}>
                  <Text style={{ fontSize: 18 }}>{article.title}</Text>
                  <Text style={{ fontSize: 16 }}>{article.description}</Text>
                  <Button title="Read more" onPress={() => Linking.openURL(article.url)} />
                </View>
              ))}
            </ScrollView>

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
      border: "solid"
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
  });