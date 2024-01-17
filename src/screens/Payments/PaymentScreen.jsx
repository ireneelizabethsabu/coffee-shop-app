import {ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './PaymentScreen.style';
import Footer from '../../components/Footer/Footer';
import {useStore} from '../../store/store';

const PaymentScreen = () => {
  const CartPrice = useStore(state => state.CartPrice);
  const [mode, setMode] = useState('Credit Card');
  const PaymentModesList = useStore(state => state.PaymentModesList);

  return (
    <>
      <ScrollView style={styles.container}>
        {PaymentModesList.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.modeRow}
            onPress={() => setMode(item.name)}>
            <Image source={item.img} style={styles.modeImage} />
            <Text style={styles.modeText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer
        selectedItem={{
          currency: '$',
          price: CartPrice,
        }}
        btnText={`Pay via ${mode}`}
        btnHandler={() => {}}
      />
    </>
  );
};

export default PaymentScreen;
