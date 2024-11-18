import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; // Import the Image component

import Home from './Screens/Home';
import LearnTabBar from './Screens/LearnTabBar';
import Portfolio from './Screens/Portfolio';
import Search from './Screens/Search';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home Screen" 
      screenOptions={({ route }) => ({
        headerShown: false
      })}>
        <Tab.Screen
          name="Home Screen"
          component={Home}
          options={{
            title: 'Home Screen',
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                source={require('./assets/TaskbarIcons/home.png')}
                style={{ width: size, height: size }} // Adjust size as needed
                resizeMode="contain" // Choose an appropriate resizeMode
                tintColor={focused ? 'blue' : 'gray'} // Customize the icon color
              />
            ),
          }} 
        />

        <Tab.Screen
          name="Learn"
          component={LearnTabBar}
          options={{
            title: 'Learn',
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                source={require('./assets/TaskbarIcons/learn.png')}
                style={{ width: size, height: size }} // Adjust size as needed
                resizeMode="contain" // Choose an appropriate resizeMode
                tintColor={focused ? 'blue' : 'gray'} // Customize the icon color
              />
            ),
          }} 
        />

        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            title: 'Portfolio',
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                source={require('./assets/TaskbarIcons/portfolio.png')}
                style={{ width: size, height: size }} // Adjust size as needed
                resizeMode="contain" // Choose an appropriate resizeMode
                tintColor={focused ? 'blue' : 'gray'} // Customize the icon color
              />
            ),
          }} 
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Search',
            tabBarIcon: ({ size, focused, color }) => (
              <Image
                source={require('./assets/TaskbarIcons/Search.png')}
                style={{ width: size, height: size }} // Adjust size as needed
                resizeMode="contain" // Choose an appropriate resizeMode
                tintColor={focused ? 'blue' : 'gray'} // Customize the icon color
              />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

App.navigationOptions = {
  headerShown: false
};