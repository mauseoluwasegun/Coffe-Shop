/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { BackHandler, ImageProps, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';
import { COLORS, FONTSIZE, SPACING, FONTFAMILY, BORDERRADIUS } from '../theme/theme';
import CartItem from '../components/CartItem';
import EmptyListAnimation from '../components/EmptyListAnimation';
import HeaderBar from '../components/HeaderBar';
import FavouriteItemList from '../components/FavouriteItemList';

const FavoritesScreen = ({navigation}:any) => {
    
  const  FavoritesList= useStore((state: any) => state. FavoritesList);
  const tabBarHeight = useBottomTabBarHeight(); 
  const  addToFavoriteList= useStore((state: any) => state. addToFavoriteList);
  const deleteFromFavoriteList= useStore((state: any) => state. deleteFromFavoriteList);
  

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ?   deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  }; 
  return (
    
    <View style={styles.screencontainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />

            {FavoritesList.length == 0 ? (
              <EmptyListAnimation title={'Cart List Is Empty '} />
            ) : (
              <View style={styles.ListItemContainer}>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity onPress={()=>{navigation.push('Details',{index:data.index, id:data.id,type:data.type });}}
                    key={data.id}>
                    <FavouriteItemList 
                      id={data.id}
                      type={data.data}
                      roasted={data.roasted}
                      ingredients={data.ingredients}
                      Imagelink_portrait={data.imagelink_portrait}
                      name={data.name}
                      special_ingredient={data.special_ingredient}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      favourite={data.favourite}
                      description={data.description} 
                      ToggleFavouriteItem={ToggleFavourite}                       
                         
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screencontainer:{
    flex:1,
    backgroundColor:COLORS.primaryBlackHex,
  },
  scrollViewFlex:{
    flexGrow:1,
  },
  scrollViewInnerView:{
    flex:1,
    justifyContent:'space-between',
   
    
  },
  itemContainer:{
    flex:1,

  },

    
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
 }
});


export default FavoritesScreen;