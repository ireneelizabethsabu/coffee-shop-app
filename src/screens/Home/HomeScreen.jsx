import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './HomeScreen.style';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import Search from '../../components/Search/Search';
import {SIZES} from '../../theme';
import {useFetch} from '../../../hooks/useFetch';
import List from '../../components/List/List';

const COFFEE = [
  'All',
  'Americano',
  'Black Coffee',
  'Cappucchino',
  'Espresso',
  'Latte',
  'Macchiato',
];

const HomeScreen = () => {
  const {CoffeeData, BeansData} = useFetch();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(COFFEE[0]);

  return (
    <ScrollView style={styles.container}>
      <HomeHeader />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Find the best coffee for you</Text>
      </View>
      <Search search={search} setSearch={setSearch} />
      <FlatList
        data={COFFEE}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setActiveTab(item)}
            style={styles.tabWrapper(item, activeTab)}>
            <Text style={styles.tabText(item, activeTab)}>{item}</Text>
          </TouchableOpacity>
        )}
        horizontal
        keyExtractor={item => item}
        contentContainerStyle={{
          columnGap: SIZES.medium,
        }}
        style={styles.tabContainer}
      />
      <List data={CoffeeData} />
      <View>
        <Text style={styles.beanTitle}>Coffee beans</Text>
      </View>
      <List data={BeansData} />
    </ScrollView>
  );
};

export default HomeScreen;
