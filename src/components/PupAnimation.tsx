/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../theme/theme';
import LottieView from 'lottie-react-native';

interface PupAnimationProps {
    style:any;
    source:any;
}
const PupAnimation:React.FC< PupAnimationProps> = ({style, source}) => {
  return (
    <View style={styles.lottieViewContainer}>
        <LottieView style={style} source={source} autoPlay loop={false}/>
      
    </View>
  );
};

export default PupAnimation;

const styles = StyleSheet.create({
    lottieViewContainer:{
      flex:1,
      position:'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0,
      zIndex:1000,
      backgroundColor:COLORS.secondaryBlackRGBABlackRGBA,
      justifyContent:'center',
    },
  
});