import React from 'react';
import Login from './src/screens/Login';
import InstagramHomePage from './src/screens/InstagramHomePage';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigation } from './src/navigation/AppNavigation';

const App = () => {
  return(
  <NavigationContainer>
    <HomeStackNavigation/>
  </NavigationContainer>
  
  
  );
  
};



export default App;
