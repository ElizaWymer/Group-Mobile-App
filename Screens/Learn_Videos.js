import { Pressable} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function Learn_Videos() { 
  
  const [video, setVideo] = useState("https://www.youtube.com/embed/p7HKvqRI_Bo?si=vWF6yEnS7U1V0Lhx");
  
    return (
      <View style={styles.Main}>
        <View style={styles.MainHeadingView}>

          <Text style={styles.MainHeadingText}>StocksNHudds</Text>

        </View>
        
        <View style={styles.AppPage}>

          <Text style={styles.WelcomeHeadingText}>Videos</Text>
            <iframe style = {styles.VideoPlayer} src = {video} allowFullScreen> </iframe>

            <View style = {styles.ButtonStyle}>

              <Pressable onPress={() => 
                {
                  setVideo(current => current = "https://www.youtube.com/embed/p7HKvqRI_Bo?si=vWF6yEnS7U1V0Lhx");
                }}>
                    
                <Text style = {styles.ButtonTextStyle}> [Stock Market Basics] </Text>

              </Pressable>

              <Text>            </Text>

              <Pressable onPress={() => 
              {
                setVideo(current => current = "https://www.youtube.com/embed/sQQDe0hWLgQ?si=yajoHaBVTKdqnCQt");
              }}>

                <Text style = {styles.ButtonTextStyle}> [Stock Prices] </Text>

              </Pressable>
            </View>
            
            <View style = {styles.ButtonStyle}>


            <Pressable onPress={() => 
              {
                setVideo(current => current = "https://www.youtube.com/embed/21b5QF-b0rE?si=hl4GDR_F2ddeBHfx");
              }}>

                <Text style = {styles.ButtonTextStyle}> [Market Trends] </Text>

              </Pressable>

              <Text>            </Text>

              <Pressable onPress={() => 
              {
                setVideo(current => current = "https://www.youtube.com/embed/UMSmmIFM5Yg?si=ujH4IYQpyJPiRmbT");
              }}>

                <Text style = {styles.ButtonTextStyle}> [Fundamental Analysis vs. Technical Analysis] </Text>
                  
              </Pressable>

            </View>

            <View style = {styles.ButtonStyle}>

              <Pressable onPress={() => 
              {
                setVideo(current => current = "https://www.youtube.com/embed/oFfTNETT6Ww?si=8DKRmUNMRl_uMfYC");
              }}>

                <Text style = {styles.ButtonTextStyle}> [Risk Management and Portfolio Diversification] </Text>
                
              </Pressable>

              <Text>            </Text>

              <Pressable onPress={() => 
              {
                setVideo(current => current = "https://www.youtube.com/embed/ZHShdLA-4dc?si=R8uuvu958M8cuZ8k");
              }}>

                <Text style = {styles.ButtonTextStyle}> [Long-Term vs. Short-Term Investing Strategies] </Text>

              </Pressable>
          </View>
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
      paddingBottom: "15px",
      fontSize: 35,
      color: 'black',
      textAlign: 'center',
    },
  
    SearchBar: {
      backgroundColor: 'white',
      marginHorizontal: 50,
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

    ButtonStyle:{
      flexDirection: "row", 
      justifyContent: "center",
      paddingTop: "20px",
    },

    ButtonTextStyle:{
      backgroundColor: "#99ccff",
      textAlign: "center",
      fontWeight: "bold",
      width: "200px",
      height: "55px",
      border: "solid",
      paddingTop: "10px",
      borderRadius: 10,
    },

    VideoPlayer:
    {
      width: "500px",
      height: "315px",
    },
  });