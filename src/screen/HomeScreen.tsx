/* eslint-disable @typescript-eslint/func-call-spacing */
/* eslint-disable no-label-var */
/* eslint-disable quotes */
/* eslint-disable no-labels */
/* eslint-disable no-cond-assign */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {  useRef, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import CoffeeCard from '../components/CoffeeCard';
import TabNavigator from '../navigators/TabNavigator';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';




const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const HomeScreen = ({navigation}: any) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category:categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();


  
  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () =>{
    ListRef?.current?.scrollToOffset({
      animated:true,
      offSet:0,
    });
    setCategoryIndex({index:0, category:categories[1]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };

  
  const CoffeeCardAddToCart = ({
    id,
    index,
    type,
    roasted,
    imagelink_square,
    name,
    special_ingredient,
    prices,
  }:any) => {
    addToCart({
      id,
      index,
      type,
      roasted,
      imagelink_square,
      name,
      special_ingredient,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravityAndOffset(
      `${name }is Added To Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      6000,
      90,
    );
  };

//`${name }is Added To Cart`,
  


 //console.log(sortedCoffee.length);
  
  return (
    <View style={styles.screencontainer}>
      <StatusBar backgroundColor={COLORS.primaryDarkGreyHex}></StatusBar>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewFlex}>
       <HeaderBar /> 
       {/*input container*/}
       <Text style={styles.screenTitle}>Find the best{'\n'}coffee for you</Text>
       <View style={styles.InputContainerComponent}>
          <CustomIcon style={styles.InputIcon} name="search" size={FONTSIZE.size_12} color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.secondaryLightGreyHex}/>
        <TextInput placeholder="Find Your Coffee.." value={searchText} onChangeText={text => {
          setSearchText(text);
          searchCoffee(text);
        }
        }
          placeholderTextColor={COLORS.secondaryLightGreyHex}
          style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity onPress={() =>{resetSearchCoffee();}}><CustomIcon style={styles.InputIcon} name="close" size={FONTSIZE.size_18} color={COLORS.primaryLightGreyHex}/></TouchableOpacity> ): (<></>)
          }
       </View>
       {/*categories scroller*/}
        

       <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.categoryscrollviewcontainer}>
              <TouchableOpacity
                style={styles.categoryscrollviewItem}>
                <Text
                   onPress={ () =>{
                    ListRef?.current?.scrollToOffset({
                      animated:true,
                      offSet:0,
                    });
                    setCategoryIndex({index: index, category: categories[index]});
                    setSortedCoffee([...getCoffeeList(categories[index],CoffeeList)]);
                   } }
                  style={[
                    styles.categoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* coffee flatlist*/}

        <FlatList ref={ListRef} horizontal 
        ListEmptyComponent={
        <View  style={styles.EmptyListContainer}>
          <Text style={styles.categoryText}>No Coffee Available</Text>
        </View>}
        showsHorizontalScrollIndicator={false} data={sortedCoffee} contentContainerStyle={styles.FlatListContainer} keyExtractor={item => item.id} renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=>{navigation.push('Details',{index:item.index, id:item.id,type:item.type});}}>
              <CoffeeCard 
                id={item.id}
                index={item.index}
                 type={item.type}
                ingredients={item.ingredients}
                roasted={item.roasted}
                imagelink_square={item.imagelink_square}
                name={item.name}
                special_ingredient={item.special_ingredient}
                average_rating={item.average_rating} 
                prices={item. prices[0]}  
                buttonPressHandler={CoffeeCardAddToCart} 
                           />
            </TouchableOpacity>
          );
        }}
        />
         {/* Bean flatlist*/}

         <Text style={styles.coffeeBeanTitle}>Coffee Beans</Text>

        <FlatList horizontal showsHorizontalScrollIndicator={false} data={BeanList} contentContainerStyle={[styles.FlatListContainer,{marginBottom:tabBarHeight}]} keyExtractor={item => item.id} renderItem={({item}) => {
          return (
          <TouchableOpacity onPress={()=>{navigation.push('Details',{index:item.index, id:item.id,type:item.type});}}>
              <CoffeeCard 
                id={item.id}
                index={item.index}
                type={item.type}
                ingredients={item.ingredients}
                roasted={item.roasted}
                imagelink_square={item.imagelink_square}
                name={item.name}
                special_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                prices={item. prices[0]}  
                buttonPressHandler={ CoffeeCardAddToCart} 
                           />
            </TouchableOpacity>
          );
        }}
        />
        
      </ScrollView>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screencontainer: {
    flex:1,
    backgroundColor:COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow:1,
  },
 
  screenTitle:{
    fontSize:FONTSIZE.size_28,
    color:COLORS.primaryWhiteHex,
    fontFamily:FONTFAMILY.poppins_semibold,
    paddingLeft:SPACING.space_30,
    lineHeight:SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection:'row',
    margin:SPACING.space_30,
    borderRadius:BORDERRADIUS.radius_20,
    backgroundColor:COLORS.primaryDarkGreyHex,
    alignItems:'center',
  },
  InputIcon :{
    marginHorizontal:SPACING.space_20,
  },
  TextInputContainer: {
    flex:1,
   height:SPACING.space_20 * 3,
   fontFamily:FONTFAMILY.poppins_medium,
   fontSize:FONTSIZE.size_14,
   color:COLORS.primaryWhiteHex,
  },
  categoryScrollViewStyle:{
    paddingHorizontal:SPACING.space_20,
    marginBottom:SPACING.space_20,
  },
  categoryscrollviewcontainer :{
    paddingHorizontal:SPACING.space_15,
  },
  categoryscrollviewItem:{
    alignItems:'center',
  },
  categoryText:{
   fontFamily:FONTFAMILY.poppins_semibold,
   fontSize:FONTSIZE.size_16,
   color:COLORS.primaryLightGreyHex,
   
  },
  ActiveCategory:{
   height:SPACING.space_4,
   width:SPACING.space_30,
   borderRadius:BORDERRADIUS.radius_10,
   backgroundColor:COLORS.primaryOrangeHex,
  },
  FlatListContainer:{
   gap:SPACING.space_20,
   paddingHorizontal:SPACING.space_30,
   paddingVertical:SPACING.space_20,
  },
  EmptyListContainer:{
    width:Dimensions.get('window').width - SPACING.space_30 * 2, 
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:SPACING.space_36 * 3.6,
  },

  coffeeBeanTitle:{
    color:COLORS.secondaryLightGreyHex,
    marginLeft:SPACING.space_30,
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_18,
  },
 
});

