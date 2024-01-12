import {View, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Details.style';
import Footer from '../../components/Footer/Footer';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import Description from '../../components/Description/Description';
import SizeBox from '../../components/SizeBox/SizeBox';

const DetailsSreen = ({route}) => {
  const {data} = route.params;
  const [selectedItem, setSelectedItem] = useState(data.prices[0]);
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

      <Footer selectedItem={selectedItem} />
    </View>
  );
};

export default DetailsSreen;
