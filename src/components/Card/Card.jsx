import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './Card.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, icons} from '../../theme';
import {useStore} from '../../store/store';

const Card = ({data}) => {
  const addToCart = useStore(state => state.addToCart);
  const calculatePrice = useStore(state => state.calculatePrice);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={data.imagelink_square}
          resizeMode="cover"
          imageStyle={styles.image}
          style={styles.image}>
          <View style={styles.ratingContainer}>
            <Icon name={icons.star} size={15} color={COLORS.orange} />
            <Text style={styles.rating}>{data.average_rating}</Text>
          </View>
        </ImageBackground>
      </View>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.subTitle}>{data.special_ingredient}</Text>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            <Text style={styles.currencyText}>{data.prices[0]?.currency}</Text>
            {data.prices[0]?.price}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addBtnContainer}
          onPress={() => {
            addToCart(
              {
                id: data.id,
                name: data.name,
                roasted: data.roasted,
                imagelink_square: data.imagelink_square,
                special_ingredient: data.special_ingredient,
                quantity: [],
              },
              data.prices[0],
            );
            calculatePrice();
          }}>
          <Icon name={icons.add} color={COLORS.white} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
