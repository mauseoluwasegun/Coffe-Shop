/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
interface PaymentMethodProps {
  paymentMode: string;
  name: String;
  icon: any;
  isIcon: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => {
  return (
    <View
      style={[
        styles.paymentCardContainer,
        {
          borderColor:
            paymentMode === name
              ? COLORS.primaryOrangeHex
              : COLORS.primaryGreyHex,
        },
      ]}>
      {isIcon ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientPayment}>
          <View style={styles.walletRow}>
            <CustomIcon
              name={'wallet'}
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_20}
            />
            <Text style={styles.paymentTitle}>{name}</Text>
            <Text style={styles.paymentPrice}> $1992.0</Text>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientRegular}>
          <Image style={styles.iconsImages} source={icon} />
          <Text style={styles.paymentTitle}>{name}</Text>
        </LinearGradient>
      )}
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  paymentCardContainer: {
    borderRadius: BORDERRADIUS.radius_10 * 2,
    backgroundColor: COLORS.secondaryGreyHex,
    borderWidth: 3,
  },
  LinearGradientPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.space_12,
    gap: SPACING.space_24,
    paddingHorizontal: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_10 * 2,
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },

  paymentTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  paymentPrice: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
    marginLeft: SPACING.space_30 * 3,
  },
  LinearGradientRegular: {
    flexDirection: 'row',
    padding: SPACING.space_12,
    gap: SPACING.space_24,
    alignItems: 'center',
    paddingHorizontal: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_10 * 2,
  },
  iconsImages: {
    width: SPACING.space_30,
    height: SPACING.space_30,
  },
});
