/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screen/FavoritesScreen';
import { BlurView } from '@react-native-community/blur';
import HomeScreen from '../screen/HomeScreen';
import CartScreen from '../screen/CartScreen';
import OrdersHistoryScreen from '../screen/OrdersHistoryScreen';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';




const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBarStyle,
    tabBarBackground: () => (
      <BlurView
       overlayColor=""
       blurAmount={15}
       style={styles.BlurViewStyles}
      />
    ),

  }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarIcon: ({focused, color, size}) => (
        <CustomIcon
          name="home"
          size={25}
          color={
            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
          }
        />
      ),
    }} />
    <Tab.Screen name="Cart" component={CartScreen} options={{
      tabBarIcon: ({focused, color, size}) => (
        <CustomIcon
          name="cart"
          size={25}
          color={
            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
          }
        />
      ),
    }} />
    <Tab.Screen name="Favorite" component={FavoritesScreen} options={{
      tabBarIcon: ({focused, color, size}) => (
        <CustomIcon
          name="like"
          size={25}
          color={
            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
          }
        />
      ),
    }} />
    <Tab.Screen name="History" component={OrdersHistoryScreen}
    options={{
      tabBarIcon: ({focused, color, size}) => (
        <CustomIcon
          name="bell"
          size={25}
          color={
            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
          }
        />
      ),
    }} />
  </Tab.Navigator>
);


const styles = StyleSheet.create({
  tabBarStyle:{
    height:80,
    position:'absolute',
    backgroundColor:COLORS.primaryBlackRGBA,
    borderWidth:0,
    elevation:0,
    borderTopColor:'transparent',
  },
  BlurViewStyles:{
    position:'absolute',
    top:0,
    right:0,
    bottom:0,
    left:0,
  },

});

export default TabNavigator;
