/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import { ImageProps } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import ImageBackgroundInfo from './ImageBackgroundInfo';

interface FavouriteItemListProps {
  id:string;
  type:string;
  roasted:string;
  ingredients:string;
  Imagelink_portrait:ImageProps;
  name:string;
  special_ingredient:string;
  average_rating:number;
  ratings_count:string;
  favourite:boolean;
  description:string;
 ToggleFavouriteItem:any;
}

const FavouriteItemList: React.FC<FavouriteItemListProps> = ({ 
  id,
  type,
  roasted,
  ingredients,
  Imagelink_portrait,
  name,
  special_ingredient,
  average_rating,
  ratings_count,
  favourite,
  description,
  ToggleFavouriteItem,
}) => {
  return (
    <View   style={styles.ContainerCard} >
      <ImageBackgroundInfo 
         EnableBackHandler={false}
         imagelink_portrait={Imagelink_portrait}
         type={type}
         id={id}
         favourite={favourite}
         name={name}
         ingredients={ingredients}
         special_ingredient={special_ingredient}
         average_rating={average_rating}
         ratings_count={ratings_count}
         roasted={roasted}
         ToggleFavourite={ToggleFavouriteItem}
      />
      <LinearGradient
          start={{x:0,y:0}}
          end={{x:1,y:1}}
          style={styles.ContainerCardLinearGradient} colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]} 
      > 
        
        <Text style={styles.descriptionTitle} >Description</Text>
        <Text style={styles.DescriptionContainer} >{description}</Text>
      </LinearGradient>
      
    </View>
  );
};

export default FavouriteItemList;

const styles = StyleSheet.create({
  ContainerCard:{
 
   borderRadius:BORDERRADIUS.radius_25,
   overflow:'hidden',
  },
  ContainerCardLinearGradient:{
    gap:SPACING.space_16,
    padding:SPACING.space_15,

  },
  descriptionTitle:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_16,
    color:COLORS.secondaryLightGreyHex,
  
  },
  DescriptionContainer:{
    fontFamily:FONTFAMILY.poppins_regular,
    fontSize:FONTSIZE.size_14,
    color:COLORS.primaryWhiteHex,

  },
});