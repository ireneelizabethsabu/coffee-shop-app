import {View, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Details.style';
import Footer from '../../components/Footer/Footer';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import Description from '../../components/Description/Description';
import SizeBox from '../../components/SizeBox/SizeBox';
import {useStore} from '../../store/store';

const DetailsSreen = ({route, navigation}) => {
  const {data} = route.params;
  const [selectedItem, setSelectedItem] = useState(data.prices[0]);
  const addToCart = useStore(state => state.addToCart);
  const calculatePrice = useStore(state => state.calculatePrice);
  return (
    <View style={styles.container}>
      <ScrollView>
        <DetailsHeader
          data={data}
          favoriteIconTop={StatusBar.currentHeight + 10}
          imageHeight={600}
        />
        <View style={styles.wrapper}>
          <Description description={data.description} />
          <SizeBox
            prices={data.prices}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </View>
      </ScrollView>

      <Footer
        selectedItem={selectedItem}
        btnText="Add to cart"
        btnHandler={() => {
          addToCart(
            {
              id: data.id,
              name: data.name,
              roasted: data.roasted,
              imagelink_square: data.imagelink_square,
              special_ingredient: data.special_ingredient,
              quantity: [],
            },
            selectedItem,
          );
          calculatePrice();
          navigation.navigate('Cart');
        }}
      />
    </View>
  );
};

export default DetailsSreen;
