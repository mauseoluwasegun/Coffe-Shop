/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface GradientBGIconProps {
    name:string;
    color:string;
    size:number;
}


const GradientBGIcon:React.FC< GradientBGIconProps> = ({name,color,size}) => {
  return (
    <View style={styles.container}>
      <LinearGradient 
        start={{x: 0,y: 0}}
        end={{x: 1,y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]} style={styles.linerGradientBG}>
          <CustomIcon name={name} color={color} size={size}/>
      </LinearGradient>
    </View>
  );
};



const styles = StyleSheet.create({
    container:{
     borderWidth:2,
     borderColor:COLORS.secondaryDarkGreyHex,
     borderRadius:SPACING.space_12,
     alignContent:'center',
     justifyContent:'center',
     backgroundColor:COLORS.secondaryDarkGreyHex,
     overflow:'hidden',
    },
    linerGradientBG: {
     height:SPACING.space_36,
     width:SPACING.space_36,
     alignItems:'center',
     justifyContent:'center',
    },
});

export default GradientBGIcon;