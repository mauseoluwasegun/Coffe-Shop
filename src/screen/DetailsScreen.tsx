/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable space-infix-ops */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View ,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { useStore } from '../store/store';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';



const DetailsScreen = ({navigation, route}:any) => {
  //console.log('navigation =', route.params);
  const ItemOfIndex = useStore((state: any) =>
  route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
)[route.params.index];
const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
const deleteFromFavoriteList = useStore(
  (state: any) => state.deleteFromFavoriteList,
);

const addToCart = useStore(
  (state: any) => state.addToCart,
);
const  calculateCartPrice = useStore(
  (state: any) => state.calculateCartPrice,
);

const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
  favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
};

const [price , setPrice] = useState(ItemOfIndex.prices[0]);
const [fullDec , setFullDesc] = useState(false);

  const BackHandler = () => {
    navigation.pop();
  };
  const addToCartHandler = ({
        id,
        index,
        type,
        roasted,
        imagelink_square,
        name,
        special_ingredient,
        price,
      }:any) => {
        addToCart({
          id,
          index,
          type,
          roasted,
          imagelink_square,
          name,
          special_ingredient,
          prices:[{...price,quantity:1}], 
        });
        calculateCartPrice();
        navigation.navigate('Cart');

      };
 
  return (
    <View style={styles.screencontainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewFlex}>
            <ImageBackgroundInfo
              EnableBackHandler={true}
              imagelink_portrait={ItemOfIndex.imagelink_portrait}
              type={ItemOfIndex.type}
              id={ItemOfIndex.id}
              favourite={ItemOfIndex.favourite}
              name={ItemOfIndex.name}
              ingredients={ItemOfIndex.ingredients}
              special_ingredient={ItemOfIndex.special_ingredient}
              average_rating={ItemOfIndex.average_rating}
              ratings_count={ItemOfIndex.ratings_count}
              roasted={ItemOfIndex.roasted}
              BackHandler={BackHandler}
              ToggleFavourite={ToggleFavourite}
           />
           <View style={styles.FootterInfoArea}>
             <Text style={styles.infoTitle}> Description</Text>
            {fullDec ? (
             <TouchableWithoutFeedback onPress={ () => {setFullDesc(prev => !prev);}}>
                <Text style={styles.DescriptionText}>{ItemOfIndex.description}</Text>
             </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback  onPress={ () => {setFullDesc(prev => !prev);}}>
                 <Text numberOfLines={3} style={styles.DescriptionText}>{ItemOfIndex.description}
          
                 </Text>
              </TouchableWithoutFeedback> 
            )}
            <Text style={styles.infoStyle}>Size  </Text>
            <View style={styles.sizeOuterContainer}>
              {ItemOfIndex.prices.map((data:any) => (
              <TouchableOpacity onPress={() => {
                setPrice(data);
              }} key={data.size}
                 style={[
                  styles.sizeBox,
                  {
                    borderColor:
                     data.size == price.size
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryLightGreyHex,
                  },
                ]}>
                   <Text 
                   style={[
                    
                    {
                      fontSize:
                       ItemOfIndex.type == 'bean'
                        ? FONTSIZE.size_14 
                        : FONTSIZE.size_16,

                      color:
                        data.size == price.size
                         ? COLORS.primaryOrangeHex
                         : COLORS.primaryLightGreyHex,  
                    
                    },
                   ]}>{data.size}</Text>
                </TouchableOpacity>
              ))}
            </View>
           </View>
           <PaymentFooter price={price} buttonTitle="Add to Cart" buttonPressHandler={()=>{
            addToCartHandler({
                id:ItemOfIndex.id,
                index:ItemOfIndex. index,
                type:ItemOfIndex.tpe,
                roasted:ItemOfIndex.roasted,
                imagelink_square:ItemOfIndex. imagelink_square,
                name:ItemOfIndex.name,
                special_ingredient:ItemOfIndex.special_ingredient,
                price:price,
            });
           }}/>
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
  FootterInfoArea:{
   padding:SPACING.space_20,
   fontFamily:FONTFAMILY.poppins_semibold,
   fontSize:FONTSIZE.size_10,
   color:COLORS.primaryWhiteHex,
  },
  infoTitle:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_16,
    color:COLORS.primaryWhiteHex,
    marginBottom:SPACING.space_10,
  },
  DescriptionText:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_14,
    color:COLORS.primaryWhiteHex,
    marginBottom:SPACING.space_30,
    letterSpacing:0.5,
  },
  infoStyle:{ 
    fontSize:FONTSIZE.size_16,
    color:COLORS.primaryWhiteHex,
    marginBottom:SPACING.space_10,
  },
sizeOuterContainer:{
 flex:1,
 flexDirection:'row',
 justifyContent:'space-between',
 gap:SPACING.space_20,
},
sizeBox:{
 flex:1,
 backgroundColor:COLORS.primaryDarkGreyHex,
 alignItems:'center',
 justifyContent:'center',
 height:SPACING.space_20 + 15,
 borderRadius:BORDERRADIUS.radius_10,
 borderWidth:2,
},
});

export default DetailsScreen;