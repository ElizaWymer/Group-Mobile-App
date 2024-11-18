import { StyleSheet, FlatList, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native"

export default function Learn_Results() {
    
    return (
      <View style={styles.Main}>
        <View style={styles.MainHeadingView}>

          
          <Text style={styles.MainHeadingText}>StocksNHudds</Text>

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