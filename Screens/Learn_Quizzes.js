import React, { useState } from 'react';
import {Text, View, StyleSheet, FlatList, CheckBox, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; //need to install this as well now!!

import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-web';

let score = 0;

const questionOneData = [
  { id: 1, answers: 'You own part of the company', isChecked: false },
  { id: 2, answers: 'You have lent money to the company', isChecked: false },
  { id: 3, answers: 'Your original investment will be returned to you with interest', isChecked: false },
];

const questionTwoData = [
  { id: 4, answers: 'You own part of the company', isChecked: false },
  { id: 5, answers: 'You have lent money to the company', isChecked: false },
  { id: 6, answers: 'You can vote on shareholder resolutions', isChecked: false },
];

const questionThreeData = [
  { id: 7, answers: 'True', isChecked: false },
  { id: 8, answers: 'False', isChecked: false },
];

const questionFourData = [
  { id: 9, answers: "The company's preferred stock", isChecked: false },
  { id: 10, answers: "The company's common stock", isChecked: false },
  { id: 11, answers: "The company's bonds", isChecked: false },
];

const questionFiveData = [
  { id: 12, answers: "Municipal bonds are lower risk", isChecked: false },
  { id: 13, answers: 'There is a greater demand for municipal bonds', isChecked: false },
  { id: 14, answers: "Municipal bonds can be tax-free", isChecked: false },
];

export default function Learn_Quizzes(test) {

  const [questionOneAnswers, setquestionOneAnswers] = useState(questionOneData);
  const [questionTwoAnswers, setquestionTwoAnswers] = useState(questionTwoData);
  const [questionThreeAnswers, setquestionThreeAnswers] = useState(questionThreeData);
  const [questionFourAnswers, setquestionFourAnswers] = useState(questionFourData);
  const [questionFiveAnswers, setquestionFiveAnswers] = useState(questionFiveData);

  const handleChange = (id) => {
    let temp1 = questionOneAnswers.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      if (id != product.id && id < 4){
        return { ...product, isChecked: false };
      }
      return product;
    });

    let temp2 = questionTwoAnswers.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      if (id != product.id && id > 3 && id < 7){
        return { ...product, isChecked: false };
      }
      return product;
    });

    let temp3 = questionThreeAnswers.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      if (id != product.id && id > 6 && id < 9){
        return { ...product, isChecked: false };
      }
      return product;
    });

    let temp4 = questionFourAnswers.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      if (id != product.id && id > 8 && id < 12){
        return { ...product, isChecked: false };
      }
      return product;
    });
    
    let temp5 = questionFiveAnswers.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      if (id != product.id && id > 11 && id < 15){
        return { ...product, isChecked: false };
      }
      return product;
    });

    setquestionOneAnswers(temp1);
    setquestionTwoAnswers(temp2);
    setquestionThreeAnswers(temp3);
    setquestionFourAnswers(temp4);
    setquestionFiveAnswers(temp5);
  };

  let questionOneSelected = questionOneAnswers.filter(function(item)
  {
    return item.isChecked;
  }).map(function({id})
  {
     console.log(id);
     return id;
     
  });

  let questionTwoSelected = questionTwoAnswers.filter(function(item)
  {
    return item.isChecked;
  }).map(function({id})
  {
     console.log(id);
     return id;
     
  });

  let questionThreeSelected = questionThreeAnswers.filter(function(item)
  {
    return item.isChecked;
  }).map(function({id})
  {
     console.log(id);
     return id;
     
  });

  let questionFourSelected = questionFourAnswers.filter(function(item)
  {
    return item.isChecked;
  }).map(function({id})
  {
     console.log(id);
     return id;
     
  });

  let questionFiveSelected = questionFiveAnswers.filter(function(item)
  {
    return item.isChecked;
  }).map(function({id})
  {
     console.log(id);
     return id;
     
  });

  const calculateScore = async () => {
    let updatedScore = score;
    if (questionOneSelected.includes(1)) updatedScore += 1;
    if (questionTwoSelected.includes(5)) updatedScore += 1;
    if (questionThreeSelected.includes(7)) updatedScore += 1;
    if (questionFourSelected.includes(10)) updatedScore += 1;
    if (questionFiveSelected.includes(14)) updatedScore += 1;
  
    // Save the updated score to AsyncStorage
    try {
      await AsyncStorage.setItem('quizScore', updatedScore.toString());
      console.log('Score saved successfully!');
      console.log(AsyncStorage.getItem('quizScore'));
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };
  


  const renderFlatList = (renderData) => {
    return (
      <FlatList
        scrollEnabled={false}
        data={renderData}
        renderItem={({ item }) => (
          <Card style={{ margin: 5, padding: "5px"}}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                
                <Text style = {styles.StocksText}>{item.answers}</Text>
                <CheckBox
                  value={item.isChecked}
                  onChange={() => {
                    handleChange(item.id);
                  }}
                />
              </View>
          </Card>
        )}
      />
    );
  };

  return (
    <ScrollView>
      <View style={styles.Main}>
        <View style={styles.MainHeadingView}>
          <Text style={styles.MainHeadingText}>StocksNHudds</Text>
        </View>
        <Text style={styles.WelcomeHeadingText}> Investment Knowledge Quiz </Text> 
        <Text style = {{fontSize: 17, color: 'black', textAlign: 'center', textAlignVertical: 'center', paddingBottom: "10px"}}> 
                    This quiz is designed to test your knowledge of stocks, shares   and investments.
                    You will be given five multiple choice      questions and then graded at the end of the quiz.
                  </Text>
        <Text style={styles.SecondaryHeadingText}>Question 1: If you buy a company's stock:</Text>
        <View style={{ flex: 1 }}>{renderFlatList(questionOneAnswers)}</View>
        <Text style={styles.SecondaryHeadingText}>Question 2: If you buy a company's bond:</Text>
        <View style={{ flex: 1 }}>{renderFlatList(questionTwoAnswers)}</View>
        <Text style={styles.SecondaryHeadingText}>Question 3: In general, investments         that are riskier tend
                      to provide            higher returns over time than                  investments with less risk:</Text>
        <View style={{ flex: 1 }}>{renderFlatList(questionThreeAnswers)}</View>
        <Text style={styles.SecondaryHeadingText}>Question 4: If a company files for bankruptcy, which of the
                      following securities is most at risk of becoming virtually worthless?</Text>
        <View style={{ flex: 1 }}>{renderFlatList(questionFourAnswers)}</View>
        <Text style={styles.SecondaryHeadingText}>Question 5: Which of the following best explains why many
                      municipal bonds       pay lower yields than other government bonds?</Text>
        <View style={{ flex: 1 }}>{renderFlatList(questionFiveAnswers)}</View>

          <Pressable 
          style = {styles.ButtonStyle} 
          onPress = {() => 
            {
              calculateScore();
            }}>

          <Text style = {styles.ButtonTextStyle}> Submit Answers </Text>

          </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    Main: 
    {
      flex: 1,
      backgroundColor: 'white',
    },
    
    MainHeadingView: 
    {
      width: '100%',
      backgroundColor: "#99ccff",
    },
    
    MainHeadingText: 
    {
      fontSize: 35,
      color: 'black',
      textAlign: 'center',
    },

    WelcomeHeadingText: 
    {
      paddingBottom: "5px",
      fontSize: 35,
      color: 'black',
      textAlign: 'center',
    },
  
    SearchBar: 
    {
      backgroundColor: 'white',
      marginHorizontal: 50,
      borderStyle: "solid"
    },
  
    SecondaryHeadingText: 
    {
      fontSize: 25,
      color: 'black',
      textAlign: 'center',
      backgroundColor: "#99ccff",
      padding: "10px"
    },
  
    StocksFlatList: 
    {
      paddingHorizontal: '20px',
      paddingTop: '5px',
      paddingBottom: '5px',
      border: "solid",
      borderWidth: 1
    },

    StocksView: 
    {
      width: '100%',
      backgroundColor: 'white',

    },

    StocksText: {
      fontSize: 15,
      color: 'black',
      textAlign: 'centre',
      textAlignVertical: 'center',
      paddingLeft: "15px",
      paddingBottom: "5px"
    },
  
    AppPage: {
      flex: 8,
      width: '100%',
      backgroundColor: 'white',
    },

    ButtonStyle:{
      flexDirection: "column", 
      justifyContent: "center",
      paddingTop: "30px",
      paddingBottom: "20px",
      paddingLeft: "150px"
    },

    ButtonTextStyle:{
      backgroundColor: "#99ccff",
      textAlign: "center",
      fontWeight: "bold",
      width: "200px",
      height: "50px",
      border: "solid",
      paddingTop: "10px",
      borderRadius: 10,
    }
  })