/* eslint-disable prettier/prettier */

import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../theme/theme';
import { ScrollView } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';
import CartItem from '../components/CartItem';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CartScreen = ({navigation, route}:any) => {

  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore((state: any) => state.incrementCartItemQuantity);
  const decrementCartItemQuantity = useStore((state: any) => state.decrementCartItemQuantity);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();
 const buttonPressHandler = () => {
    navigation.push('Payment',{amount:CartPrice});
  };
  const incrementCartItemQuantityHandler = (id:string,size:string)=>{
    incrementCartItemQuantity(id,size);
    calculateCartPrice();
  };
  const decrementCartItemQuantityHandler = (id:string,size:string)=>{
    decrementCartItemQuantity(id,size);
    calculateCartPrice();
  };
  console.log('CartList =', CartList.length);
  return (
    <View style={styles.screencontainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />

            {CartList.length === 0 ? (
              <EmptyListAnimation title={'Cart List Is Empty '} />
            ) : (
              <View style={styles.ListItemContainer}>
                {CartList.map((data: any) => (
                  <TouchableOpacity onPress={()=>{navigation.navigate('Details',
                  {index:data.index, id:data.id,type:data.type });
                }}
                    key={data.id}>
                    <CartItem
                      id={data.id}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {CartList.length !== 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '$'}}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screencontainer:{
    flex:1,
    backgroundColor:COLORS.primaryBlackHex,
  },
  scrollViewFlex:{
    flexGrow:1,
  },
  scrollViewInnerView:{
    flex:1,
    justifyContent:'space-between',
  },
  itemContainer:{
    flex:1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
