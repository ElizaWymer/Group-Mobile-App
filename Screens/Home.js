import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const DATA = [];

const rapidAPIKey = require('../config.json');

const options = {
  method: 'GET',
  url: 'https://yahoo-finance127.p.rapidapi.com/multi-quote/tsla,aapl,msft,snap,amd,grab,nvda,mara',
  headers: {
    'X-RapidAPI-Key': rapidAPIKey.rapidApiKey,
    'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
  }
};

axios.request(options)
  .then(response => {
    console.log(typeof response.data);
    console.log("this is the new stock");
    const stock_array = Object.values(response.data);
    console.log(stock_array);
    stock_array.forEach(stock => {
      const name = stock.longName;
      const ticker = stock.symbol;
      const price = stock.regularMarketPrice.raw;
      const market_change = stock.regularMarketChange.raw;
      const market_volume = stock.regularMarketVolume.fmt;
      const fiftytwoWeek_low = stock.fiftyTwoWeekLow.raw;
      const fiftytwoWeek_high = stock.fiftyTwoWeekHigh.raw;
      const market_change_percent = stock.regularMarketChangePercent.fmt;
      const annualDividend = stock.trailingAnnualDividendYield.fmt;
      const market_range = stock.regularMarketDayRange.raw;
      const bid = stock.bid.raw;
      const ask = stock.ask.raw;
      const market_cap = stock.marketCap.fmt;
      DATA.push({ name: name, market_range: market_range , ticker: ticker, price: price, market_change: market_change, market_volume: market_volume, fiftytwoWeek_low: fiftytwoWeek_low, fiftytwoWeek_high: fiftytwoWeek_high, market_change_percent: market_change_percent, annualDividend: annualDividend, bid: bid, ask: ask, market_cap: market_cap});
    });
  })
  .catch(error => {
    console.error(error);
  });

export default function Home() {
  const navigation = useNavigation();
  const [expandedStock, setExpandedStock] = useState(null);

  const handleStockPress = (stock) => {
    setExpandedStock(expandedStock === stock ? null : stock);
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedStock === item;
    return (
      <View style={styles.stockItem}>
        <Text style={styles.stockText}>{item.ticker}</Text>
        <Text style={styles.stockText}>{"$"+item.price}</Text>
        {isExpanded && (
          <View>
            
            <Text style={styles.stockText}>{"Name of stock: "+item.name}</Text>
            <Text style={styles.stockText}>{"Market Change: "+item.market_change}</Text>
            <Text style={styles.stockText}>{"Market Volume: "+item.market_volume}</Text>
            <Text style={styles.stockText}>{"52 Week High: "+item.fiftytwoWeek_high}</Text>
            <Text style={styles.stockText}>{"52 Week Low: "+item.fiftytwoWeek_low}</Text>
            <Text style={styles.stockText}>{"Market Change Percent: "+item.market_change_percent}</Text>
            <Text style={styles.stockText}>{"Market Day Range: "+item.market_range}</Text>
            <Text style={styles.stockText}>{"Annual Dividend: "+item.annualDividend}</Text>
            <Text style={styles.stockText}>{"Market Cap: "+item.market_cap}</Text>
            <Text style={styles.stockText}>{"Bid: "+item.bid}</Text>
            <Text style={styles.stockText}>{"Ask: "+item.ask}</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => handleStockPress(item)}>
          <Text style={styles.button}>{isExpanded ? 'Collapse Details' : 'View Details'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.Main}>
      <View style={styles.MainHeadingView}>
        <Text style={styles.MainHeadingText}>StocksNHudds</Text>
      </View>
        
      <View style={styles.AppPage}>
        <Text style={styles.WelcomeHeadingText}>Welcome</Text>
        <Text style={styles.SecondaryHeadingText}>Popular Stocks Today</Text>
  
        <FlatList style={styles.StocksFlatList} data={DATA} renderItem={renderItem} keyExtractor={item => item.ticker}/>
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
  
  explanation: {
    


  },

  button: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
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
    flexDirection: 'row',
    justifyContent: 'center'
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
