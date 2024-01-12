import {View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useFetch} from '../../../hooks/useFetch';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import {styles} from './FavoriteScreen.style';
import Description from '../../components/Description/Description';

const FavoriteScreen = ({navigation}) => {
  const {CoffeeData} = useFetch();
  return (
    <FlatList
      data={CoffeeData}
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
