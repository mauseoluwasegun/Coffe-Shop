/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import { StyleSheet,  View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import LottieView from 'lottie-react-native';

 
interface EmptyListAnimationProps{
    title:string;
}

const EmptyListAnimation:React.FC<EmptyListAnimationProps> = ({title}) => {
  return (
    <View style={styles.EmptyCartContainer}>
       <LottieView style={styles.LottieStyle} source={require('../lottie/coffeecup.json')} autoPlay loop/>
       <Text style={styles.LottieText}>
        {title}
       </Text>
    </View>
  );
};

export default EmptyListAnimation;

const styles = StyleSheet.create({
    EmptyCartContainer:{
          flex:1,
          justifyContent:'center',
    },
    LottieStyle:{
    height:130,
    },
    LottieText:{
      fontFamily:FONTFAMILY.poppins_medium,
      fontSize:FONTSIZE.size_16,
      color:COLORS.primaryOrangeHex,
      textAlign:'center',
    },
   
    
}); 