import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Card from '../Card/Card';
import {styles} from './List.style';

const List = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => {}}>
          <Card data={item} />
        </TouchableOpacity>
      )}
      horizontal
      keyExtractor={item => item.id}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        columnGap: 15,
      }}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    />
  );
};

export default List;
