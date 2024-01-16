import {View, FlatList, Button, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './CartScreen.style';
import Footer from '../../components/Footer/Footer';
import {useStore} from '../../store/store';
import Empty from '../../components/Empty/Empty';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartCard from '../../components/CartCard/CartCard';

const CartScreen = () => {
  const CartData = useStore(state => state.CartList);
  const CartPrice = useStore(state => state.CartPrice);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={async () => {
            AsyncStorage.clear();
          }}
          style={styles.btnContainer}>
          <Text style={styles.btnText}>Clear All</Text>
        </TouchableOpacity>
        <FlatList
          data={CartData}
          renderItem={({item}) => <CartCard cart={item} />}
          // eslint-disable-next-line react/no-unstable-nested-components
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Empty text="Cart is empty" />}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        />
      </View>
      <Footer
        selectedItem={{
          currency: '$',
          price: CartPrice,
        }}
        btnText="Pay"
      />
    </>
  );
};

export default CartScreen;
