import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Details.style';
import {icons} from '../../theme';
import DetailsFooter from '../../components/DetailsFooter/DetailsFooter';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import Description from '../../components/Description/Description';

const DetailsSreen = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <DetailsHeader data={data} />
        <Description />
        <Text style={styles.text}>{JSON.stringify(data)}</Text>
      </ScrollView>
      <DetailsFooter />
    </View>
  );
};

export default DetailsSreen;
