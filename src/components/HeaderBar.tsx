/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import ProfilePic from './ProfilePic';
import GradientBGIcon from './GradientBGIcon';



interface HeaderBarProps{
    title?:string;  
}

const HeaderBar:React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon name="menu" color={COLORS.primaryGreyHex} size={FONTSIZE.size_16}/>  
    
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic/>
        
    
    </View>
  );
};



const styles = StyleSheet.create({
    HeaderContainer: {
        padding:SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      
    },
    HeaderText: {  
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_20,
        color:COLORS.primaryWhiteHex,
    },
});

export default HeaderBar;