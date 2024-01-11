import {View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Details.style';
import DetailsFooter from '../../components/DetailsFooter/DetailsFooter';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import Description from '../../components/Description/Description';

const DetailsSreen = ({route}) => {
  const {data} = route.params;
  const [selectedItem, setSelectedItem] = useState(data.prices[0]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <DetailsHeader data={data} />
        <Description
          description={data.description}
          prices={data.prices}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </ScrollView>

      <DetailsFooter />
    </View>
  );
};

export default DetailsSreen;
