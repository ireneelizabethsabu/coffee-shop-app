import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './CartCard.style';
import {COLORS, FONTS, SIZES, icons} from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useStore} from '../../store/store';

const CartCard = ({cart}) => {
  const addToCart = useStore(state => state.addToCart);
  const removeItemFromCart = useStore(state => state.removeItemFromCart);
  const removeGroupFromCart = useStore(state => state.removeGroupFromCart);
  const calculatePrice = useStore(state => state.calculatePrice);

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardTopSection}>
        <Image
          source={cart.imagelink_square}
          resizeMode="cover"
          style={styles.image}
        />
        <View>
          <Text
            style={styles.content(SIZES.xlarge, FONTS.Medium, COLORS.white)}>
            {cart.name}
          </Text>
          <Text
            style={styles.content(SIZES.small, FONTS.Light, COLORS.lightGrey)}>
            {cart.special_ingredient}
          </Text>
          <Text
            style={[
              styles.content(SIZES.medium, FONTS.Light, COLORS.lightGrey),
              styles.roasted,
            ]}>
            {cart.roasted}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => {
            removeGroupFromCart(cart.id);
            calculatePrice();
          }}>
          <Icon name={icons.delete} size={20} color={COLORS.lightGrey} />
        </TouchableOpacity>
      </View>
      <View>
        {cart.quantity.map(item => (
          <View style={styles.quantityRow} key={`${cart.id}-${item.size}`}>
            <Text
              style={[
                styles.quantityItem(COLORS.black),
                styles.quantityItemBg,
              ]}>
              {item.size}
            </Text>
            <Text style={styles.quantityItem(COLORS.lightBlack)}>
              <Text style={styles.currency}>{item.currency}</Text>
              {item.price}
            </Text>
            <TouchableOpacity
              style={[styles.quantityItem(COLORS.orange), styles.icon]}
              onPress={() => {
                removeItemFromCart(cart, item.size);
                calculatePrice();
              }}>
              <Icon name={icons.subtract} size={30} color={COLORS.white} />
            </TouchableOpacity>
            <Text
              style={[
                styles.quantityItem(COLORS.black),
                styles.quantityItemBg,
              ]}>
              {item.quantity}
            </Text>
            <TouchableOpacity
              style={[styles.quantityItem(COLORS.orange), styles.icon]}
              onPress={() => {
                addToCart(cart, {
                  size: item.size,
                  price: item.price,
                  currency: '$',
                });
                calculatePrice();
              }}>
              <Icon name={icons.add} size={30} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default CartCard;
