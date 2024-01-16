import {FlatList, TouchableOpacity} from 'react-native';
import React, {forwardRef} from 'react';
import Card from '../Card/Card';
import {styles} from './List.style';
import Empty from '../Empty/Empty';

const List = forwardRef((props, ref) => {
  return (
    <FlatList
      ref={ref}
      data={props.data}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            props.navigateTo('Details', item);
          }}>
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
      ListEmptyComponent={<Empty text={`No ${props.type} available`} />}
    />
  );
});

export default List;
