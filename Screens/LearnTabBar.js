import { StatusBar } from 'react-native';
import { StyleSheet, TouchableOpacity, Button, TextInput, ScrollView, FlatList, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createMaterialTopTabNavigator  } from '@react-navigation/material-top-tabs';

import Learn_Videos from "./Learn_Videos"
import Learn_Explanations from './Learn_Explanations';
import Learn_Quizzes from "./Learn_Quizzes";

const Tab = createMaterialTopTabNavigator();
export default function LearnTabBar() {
    return (
      <NavigationContainer independent = {true}
      >
        <Tab.Navigator>
          <Tab.Screen
            name="Videos"
            component={Learn_Videos}
            options={{
              title: 'Videos',
            }} 
          />
  
          <Tab.Screen
            name="Explanations"
            component={Learn_Explanations}
            options={{
              title: 'Explanations',

            }} 
          />
  
          <Tab.Screen
            name="Quizzes"
            component={Learn_Quizzes}
            options={{
              title: 'Quizzes',

            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  LearnTabBar.navigationOptions = {
    headerShown: false
  };
