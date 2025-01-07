/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React ,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './src/navigators/TabNavigator';

import DetailsScreen from './src/screen/DetailsScreen';
import PaymentScreen from './src/screen/PaymentScreen';


const Stack = createNativeStackNavigator();

const App: React.FC  = () => {
  useEffect( () => {
    SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen 
            name="Tab"
            component={TabNavigator}
            options={{animation: 'slide_from_bottom'}}
          ></Stack.Screen>
          <Stack.Screen 
            name="Details"
            component={DetailsScreen}
            options={{animation: 'slide_from_bottom'}}
          ></Stack.Screen>
          <Stack.Screen 
            name="Payment"
            component={PaymentScreen}
            options={{animation: 'slide_from_bottom'}}
          ></Stack.Screen>  
            
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
