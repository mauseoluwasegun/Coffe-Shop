/* eslint-disable prettier/prettier */

import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import GradientBGIcon from '../components/GradientBGIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import CustomIcon from '../components/CustomIcon';
import { useStore } from '../store/store';
import PupAnimation from '../components/PupAnimation';

const PaymentList = [
  {
    name: 'wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentScreen = ({navigation,route}:any) => {
  const  calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const   addToOrderHistoryListFromCart = useStore((state: any) => state.  addToOrderHistoryListFromCart);

  const [paymentMode, setPaymentMode] = useState('credit card');
  const [showAnimation, setShowAnimation] = useState(false);

  const buttonPressHandler = () => {
    setShowAnimation(true);
    calculateCartPrice();
    addToOrderHistoryListFromCart();
    setTimeout( () => {
      setShowAnimation(false);
      navigation.navigate('History');

    },1500);

  };
  return (
    <View style={styles.screencontainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (<PupAnimation style={styles.pupAnimation} source={require('../lottie/successful.json')}/> ) : (<></>) }
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <GradientBGIcon
              name={'left'}
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>payment</Text>
          <View style={styles.emptyView} />
        </View>
        <View style={styles.paymentOptionContainer}>
          <TouchableOpacity onPress={ () => {setPaymentMode('credit card');}}>
             <View style={[styles.creditCardContainer,
              {
               borderColor:
                       paymentMode === 'credit card'
                         ? COLORS.primaryOrangeHex
                         : COLORS.primaryGreyHex,
              },
               ]}>
                <Text style={styles.creditCardTitle}>credit card</Text>
                <View style={styles.creditCardBg}>
                    <LinearGradient  start={{x: 0, y: 0}}
                      end={{x: 1, y: 1}} style={styles.LinearcreditCardRow}
                     colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                      <View  style={styles.creditCardRow}>
                        <CustomIcon name="chip" size={FONTSIZE.size_20 * 2} color={COLORS.primaryOrangeHex}/>
                        <CustomIcon name="visa" size={FONTSIZE.size_20 * 2} color={COLORS.primaryWhiteHex}/>
                      </View>
                      <View style={styles.creditCardContainerNumber}>
                        <Text style={styles.creditCardNumber} >5555</Text>
                        <Text style={styles.creditCardNumber} >5645</Text>
                        <Text style={styles.creditCardNumber} >6555</Text>
                        <Text style={styles.creditCardNumber} >5555</Text>
                      </View>
                      <View style={styles.creditCardRow}>
                        <View style={styles.creditCardNameContainer}>
                           <Text style={styles.creditCardNameSubTitle} >Card Holder Name</Text>
                           <Text style={styles.creditCardNameTitle} > mauwedo iroko</Text>
                        </View>
                        <View style={styles.creditCardDateContainer} >
                          <Text style={styles.creditCardDateSubTitle} >Expiry Date</Text>
                          <Text style={styles.creditCardDateTitle} >04/50</Text>
                        </View>

                      </View>

                   </LinearGradient>
                </View>

             </View>
          </TouchableOpacity>
          {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => {
                setPaymentMode(data.name);
              }}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode}`}
        price={{ price: route.params.amount, currency: '$' }} buttonPressHandler={buttonPressHandler}    />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  pupAnimation:{
    flex:1,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
  },
  HeaderText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  emptyView: {
    width: SPACING.space_15,
    height: SPACING.space_15,
  },
  paymentOptionContainer: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },
  creditCardContainer:{
  padding:SPACING.space_10,
  gap:SPACING.space_10,
  borderRadius:BORDERRADIUS.radius_15,
  borderWidth:3,
  },
  creditCardTitle:{
     fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_14,
    color:COLORS.primaryWhiteHex,
    marginLeft:SPACING.space_10,
  },
  creditCardBg:{
    backgroundColor:COLORS.primaryGreyHex,
    borderRadius:SPACING.space_24,
  },
  LinearcreditCardRow:{
    borderRadius:SPACING.space_24,
    gap:SPACING.space_15,
    paddingHorizontal:SPACING.space_15,
    paddingVertical:SPACING.space_15,
  },
  creditCardRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:SPACING.space_32,
  },
  creditCardContainerNumber:{
    flexDirection:'row',
    alignItems:'center',
    gap:SPACING.space_10,
  },
  creditCardNumber:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_14,
    color:COLORS.primaryWhiteHex,
    letterSpacing:SPACING.space_2 + SPACING.space_4,
  },
  creditCardNameSubTitle:{
    fontFamily:FONTFAMILY.poppins_regular,
    fontSize:FONTSIZE.size_12,
    color:COLORS.primaryLightGreyHex,
  },

  creditCardNameTitle:{
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_18,
    color:COLORS.primaryWhiteHex,
  },

  creditCardDateSubTitle:{
    fontFamily:FONTFAMILY.poppins_regular,
    fontSize:FONTSIZE.size_12,
    color:COLORS.primaryLightGreyHex,
  },
  creditCardDateTitle:{
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_18,
    color:COLORS.primaryWhiteHex,
    },
    creditCardNameContainer:{
    alignItems:'flex-start',
    },
    creditCardDateContainer:{
       alignItems:'flex-end',
    },
});
