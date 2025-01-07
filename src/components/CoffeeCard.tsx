/* eslint-disable no-trailing-spaces */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { TouchableOpacity } from 'react-native';
import BgIcon from './BgIcon';
import CustomIcon from './CustomIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;
interface CoffeeCardProps {
    id:string;
    index:number;
    type:number;
    roasted:string;
    ingredients:String;
    imagelink_square:ImageProps;
    name:number;
    special_ingredient:string;
    average_rating:number;
    prices:any;
    buttonPressHandler:any;

}

const CoffeeCard:React.FC<CoffeeCardProps> = ({
        id,
        index,
        type,
        roasted,
        imagelink_square,
        name,
        ingredients,
        special_ingredient,
        average_rating,
        prices,
        buttonPressHandler,
}) => {
  return (
    <LinearGradient 
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    style={styles.CardLinearGradientContainer} colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]} >
        <ImageBackground source={imagelink_square} style={styles.cardImages} resizeMode="cover">
          <View style={styles.cardRatingContainer}>
            <CustomIcon name={'star'} color={COLORS.primaryOrangeHex} size={FONTSIZE.size_14}/>
            <Text style={styles.cardRatingText}>{average_rating}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardsubtitle}>{special_ingredient}</Text>
        <View style={styles.cardcontainerRow}>
          <Text style={styles.cardpricecurrency}>$ <Text style={styles.cardPrice}>{prices.price}</Text> </Text>
          <TouchableOpacity onPress={ () => { 
            buttonPressHandler({
              id,
              index,
              type,
              roasted,
              imagelink_square,
              name,
              special_ingredient,
              prices: [{...prices, quantity: 1}],
            });
          }}>
          <BgIcon color={COLORS.primaryWhiteHex} name={'add'} BGcolor={COLORS.primaryOrangeHex} size={FONTSIZE.size_10}/>

          </TouchableOpacity>
        </View>
    </LinearGradient>
  );
};



const styles = StyleSheet.create({
    CardLinearGradientContainer:{
      padding:SPACING.space_15,
      borderRadius:BORDERRADIUS.radius_25,
    },
    cardImages:{
      width:CARD_WIDTH,
      height:CARD_WIDTH,
      borderRadius:BORDERRADIUS.radius_20,
      marginBottom:SPACING.space_15,
      overflow:'hidden',
    },
    cardRatingContainer:{
      flexDirection:'row',
      backgroundColor:COLORS.primaryBlackRGBA,
      alignItems:'center',
      justifyContent:'center',
      gap:SPACING.space_10,
      paddingHorizontal:SPACING.space_15,
      position:'absolute',
      borderBottomLeftRadius: BORDERRADIUS.radius_20,
      borderTopRightRadius:BORDERRADIUS.radius_20,
      top:0,
      right:0,

    },
    cardRatingText:{
   fontFamily:FONTFAMILY.poppins_medium,
   color:COLORS.primaryWhiteHex,
   lineHeight:22,
    },
    cardTitle:{
     fontFamily:FONTFAMILY.poppins_medium,
     color:COLORS.primaryWhiteHex,
     fontSize:FONTSIZE.size_16,
    },
    cardsubtitle:{
      fontFamily:FONTFAMILY.poppins_light,
      color:COLORS.primaryWhiteHex,
      fontSize:FONTSIZE.size_10,
    },
    cardcontainerRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:SPACING.space_15,
    },
    cardpricecurrency:{
      fontFamily:FONTFAMILY.poppins_semibold,
      color:COLORS.primaryOrangeHex,
      fontSize:FONTSIZE.size_18,
    },
    cardPrice:{
      color:COLORS.primaryWhiteHex,
    },
});
export default CoffeeCard;