/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BORDERRADIUS, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BgIconProps{
    name:string;
    color:string;
    size:number;
    BGcolor:string;
}


const BgIcon: React.FC<BgIconProps> = ({name,
    color,
    size,
    BGcolor}) => {
  return (
    <View style={[styles.IconBG , {backgroundColor: BGcolor}]}>
        <CustomIcon name={name} color={color} size={size}/>
    </View>
  );
};


const styles = StyleSheet.create({
    IconBG:{
        height:SPACING.space_30,
        width:SPACING.space_30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:BORDERRADIUS.radius_8,
    },
});

export default BgIcon;