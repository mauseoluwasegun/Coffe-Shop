/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FONTFAMILY, FONTSIZE, COLORS, SPACING, BORDERRADIUS } from '../theme/theme';

interface  priceProps {
    price:string;
    currency:string;
}
interface  PaymentFooterProps {
 price:priceProps;
 buttonTitle:string;
 buttonPressHandler:any;
}

const PaymentFooter:React.FC< PaymentFooterProps> = ({ price,
    buttonTitle,
    buttonPressHandler}) => {
  return (
    <View style={styles.priceFooter}>
      <View style={styles.priceContainer}>
         <Text style={styles.priceTitle}>Price</Text>
         <Text style={styles.priceText}>{price.currency}<Text style={styles.price}>{price.price}</Text></Text>
      </View>
      <TouchableOpacity style={styles.paybutton} onPress={ () => buttonPressHandler()}>
        <Text style={styles.buttonText}>{buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    priceFooter:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:SPACING.space_24,
      padding:SPACING.space_20,
    },
    priceContainer:{
        alignItems:'center',
        width: 100,
    },
    priceTitle:{
        fontSize:FONTSIZE.size_14,
        color:COLORS.primaryWhiteHex,
    },
    priceText:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_24,
        color:COLORS.primaryOrangeHex,
    },
    price:{
        color:COLORS.primaryWhiteHex,
    },
    paybutton:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      height:SPACING.space_30 * 2,
      borderRadius:BORDERRADIUS.radius_20,
      backgroundColor:COLORS.primaryOrangeHex,
    },
    buttonText:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_18,
        color:COLORS.primaryWhiteHex,
    },
});
export default PaymentFooter;
