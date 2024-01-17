import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './DetailsHeader.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, IMAGES, SIZES, icons} from '../../theme';
import {useStore} from '../../store/store';

const TextComponent = ({text, size, font, color = COLORS.white}) => (
  <Text style={styles.content(size, font, color)}>{text}</Text>
);

const DetailsHeader = ({data, favoriteIconTop, imageHeight}) => {
  const FavoriteList = useStore(state => state.FavoriteList);
  const addToFavorites = useStore(state => state.addToFavorites);
  const removeFromFavorites = useStore(state => state.removeFromFavorites);
  const [favorite, setFavorite] = useState(
    FavoriteList.indexOf(data.id) > -1 ? true : false,
  );

  return (
    <View>
      <ImageBackground
        source={data.imagelink_portrait}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        style={styles.image(imageHeight)}>
        <TouchableOpacity
          style={styles.iconContainer(favoriteIconTop)}
          onPress={() => {
            setFavorite(!favorite);
            if (FavoriteList.indexOf(data.id) > -1)
              removeFromFavorites(data.id);
            else addToFavorites(data.id);
          }}>
          <Icon
            name={icons.favorite}
            size={25}
            color={favorite ? COLORS.red : COLORS.grey}
          />
        </TouchableOpacity>

        <View style={styles.imageOverlayContainer}>
          <View style={styles.textWrapper}>
            <View>
              <TextComponent
                text={data.name}
                size={SIZES.xlarge}
                font={FONTS.Medium}
              />
              <TextComponent
                text={data.special_ingredient}
                size={SIZES.small}
                font={FONTS.Light}
                color={COLORS.lightGrey}
              />
            </View>
            <View style={styles.ratingWrapper}>
              <Icon name={icons.star} size={20} color={COLORS.orange} />
              <TextComponent
                text={data.average_rating}
                size={SIZES.xlarge}
                font={FONTS.Medium}
              />
              <TextComponent
                text={`(${data.ratings_count})`}
                size={SIZES.small}
                font={FONTS.Light}
                color={COLORS.lightGrey}
              />
            </View>
          </View>

          <View style={styles.boxWrapper}>
            <View style={styles.smallBoxWrapper}>
              <View style={styles.textBox}>
                <Image
                  source={data.type === 'Coffee' ? IMAGES.coffee : IMAGES.bean}
                  size={30}
                />
                <TextComponent
                  text={data.type}
                  size={SIZES.small}
                  font={FONTS.Light}
                />
              </View>
              <View style={styles.textBox}>
                <Icon
                  name={data.type === 'Coffee' ? icons.water : icons.location}
                  color={COLORS.orange}
                  size={30}
                />
                <TextComponent
                  text={data.ingredients}
                  size={SIZES.small}
                  font={FONTS.Light}
                />
              </View>
            </View>
            <View style={[styles.textBox]}>
              <TextComponent
                text={data.roasted}
                size={SIZES.small}
                font={FONTS.Light}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailsHeader;
