import {View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import {styles} from './FavoriteScreen.style';
import Description from '../../components/Description/Description';
import {useStore} from '../../store/store';

const FavoriteScreen = ({navigation}) => {
  const CoffeeList = useStore(state => state.CoffeeList);
  const BeanList = useStore(state => state.BeanList);
  const FavoriteList = useStore(state => state.FavoriteList);

  const filterFavorites = () => {
    return CoffeeList.concat(BeanList).filter(element => {
      if (FavoriteList.indexOf(element.id) > -1) return true;
      return false;
    });
  };
  return (
    <FlatList
      data={filterFavorites()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.push('Details', {
              data: item,
            });
          }}>
          <DetailsHeader data={item} favoriteIconTop={20} imageHeight={500} />

          <View style={styles.textContainer}>
            <Description description={item.description} />
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        padding: 20,
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default FavoriteScreen;
