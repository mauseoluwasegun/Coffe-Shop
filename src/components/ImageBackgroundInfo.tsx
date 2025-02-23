/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View ,ImageProps, ImageBackground, TouchableOpacity } from 'react-native';
import GradientBGIcon from './GradientBGIcon';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';


interface ImageBackgroundInfoProps{
    EnableBackHandler:boolean;
    imagelink_portrait:ImageProps;
    type:string;
    id:string;
    favourite:boolean;
    name:string;
    special_ingredient:string;
    average_rating:number;
    ratings_count:string;
    ingredients:string;
    roasted:string;
    BackHandler?:any;
    ToggleFavourite:any;
}
const ImageBackgroundInfo:React.
FC<ImageBackgroundInfoProps> = ({ 
    EnableBackHandler,
    imagelink_portrait,
    type,
    id,
    favourite,
    ingredients,
    name,
    special_ingredient,
    average_rating,
    ratings_count,
    roasted,
    BackHandler,
    ToggleFavourite}) => {
  return (
    <View>
      <ImageBackground source={imagelink_portrait} style={styles.itemBackgroundImage}>
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderBarContainerWithBack}>
            <TouchableOpacity onPress={()=> { BackHandler();}}>
              <GradientBGIcon name="left" color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ToggleFavourite(favourite,type,id);}}>
              <GradientBGIcon name="like"  color={
                 favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                } size={FONTSIZE.size_16}/>
            </TouchableOpacity>
          </View>
         ) :
         (<View style={styles.ImageHeaderBarContainerWithOutBack}>
          <TouchableOpacity  onPress={()=>{ToggleFavourite(favourite ,type , id  );}}>
            <GradientBGIcon name="like"  color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                } size={FONTSIZE.size_16}/>
          </TouchableOpacity>
        </View>
        )}
        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
             <View style={styles.InfoContainer}>
               <View>
                 <Text style={styles.ItemTitleText}>{name}</Text>
                 <Text style={styles.ItemSubtitleText}>{special_ingredient}</Text>
               </View>
               <View style={styles.itemPropertiesContainer}>
                  <View style={styles.ProperFirst}>
                    <CustomIcon name={ type == 'Bean' ? 'bean' : 'bean'} size={ type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24} color={COLORS.primaryOrangeHex}/>
                    <Text style={[styles.propertyTextFirst , 
                      {marginTop:
                        type == 'Bean'
                        ? SPACING.space_4  + SPACING.space_2
                        : 0,
                      },
                      ]}>{type}</Text>
                  </View>
                  <View style={styles.ProperFirst}>
                    <CustomIcon name={ type == 'Bean' ? 'location' : 'drop'} size={FONTSIZE.size_24} color={COLORS.primaryOrangeHex}/>
                    <Text style={styles.propertyTextLast}>{ingredients}</Text>
                  </View>
                 </View>
               </View>
               <View style={styles.InfoContainerRow}>
                    <View style={styles.RatingContainer}>
                      <CustomIcon name={ 'star'} size={FONTSIZE.size_16} color={COLORS.primaryOrangeHex}/>
                      <Text style={styles.RatingText}>{average_rating}</Text>
                      <Text style={styles.RatingCountText}>({ratings_count})</Text>
                    </View>
                    <View  style={styles.RoastedContainer}>
                      <Text style={styles.RostedText}>{roasted}</Text>

                    </View>
               </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};



const styles = StyleSheet.create({
  itemBackgroundImage:{
    width:'100%',
    aspectRatio:20 / 25,
    justifyContent:'space-between',
  },
  ImageHeaderBarContainerWithBack:{
    padding:SPACING.space_30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  ImageHeaderBarContainerWithOutBack:{
 padding:SPACING.space_30,
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'flex-end',
  },
  ImageInfoOuterContainer:{
 paddingVertical:SPACING.space_24,
 paddingHorizontal:SPACING.space_30,
 backgroundColor:COLORS.primaryBlackRGBA,
 borderTopLeftRadius:BORDERRADIUS.radius_20 * 2,
 borderTopRightRadius:BORDERRADIUS.radius_20 * 2,
  },
  ImageInfoInnerContainer:{
    justifyContent:'space-between',
    gap:SPACING.space_15,
  },
  InfoContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  ItemTitleText:{
    fontFamily:FONTFAMILY.poppins_semibold,
  fontSize:FONTSIZE.size_24,
  color:COLORS.primaryWhiteHex,
  },
  ItemSubtitleText:{
    fontFamily:FONTFAMILY.poppins_medium,
  fontSize:FONTSIZE.size_12,
  color:COLORS.primaryWhiteHex,
  },
  ProperFirst:{
    height:55,
    width:55,
    backgroundColor:COLORS.primaryBlackHex,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:BORDERRADIUS.radius_15,
  },
  propertyTextFirst:{
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_10,
    color:COLORS.primaryWhiteHex,
    marginTop:SPACING.space_2 + SPACING.space_4,

  },
propertyTextLast:{
  fontFamily:FONTFAMILY.poppins_medium,
  fontSize:FONTSIZE.size_10,
  color:COLORS.primaryWhiteHex,
  marginTop:SPACING.space_2 + SPACING.space_2,
},
  itemPropertiesContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:SPACING.space_15,
  },
  InfoContainerRow:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  RatingContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:SPACING.space_15,
  },
  RatingText:{
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_18,
    color:COLORS.primaryWhiteHex,
  },
 
  RatingCountText:{
    fontFamily:FONTFAMILY.poppins_regular,
    fontSize:FONTSIZE.size_12,
    color:COLORS.primaryWhiteHex,
  },
  RoastedContainer:{
    height:55,
    width:55 * 2 + SPACING.space_15,    backgroundColor:COLORS.primaryBlackHex,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:BORDERRADIUS.radius_15,
  },
  RostedText:{
    fontFamily:FONTFAMILY.poppins_regular,
    fontSize:FONTSIZE.size_12,
    color:COLORS.primaryWhiteHex,
  },


});
export default ImageBackgroundInfo;