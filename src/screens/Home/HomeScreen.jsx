import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './HomeScreen.style';
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

const filterCoffeeByType = (type, CoffeeList) => {
  return CoffeeList.filter(coffee => coffee.name === type);
};

const HomeScreen = ({navigation, route}) => {
  const {CoffeeData, BeansData} = useFetch();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(COFFEE[0]);

  const navigateTo = (routeName, data) => {
    navigation.push(routeName, {
      data: data,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Find the best coffee for you</Text>
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
      <List
        data={
          activeTab === 'All'
            ? CoffeeData
            : filterCoffeeByType(activeTab, CoffeeData)
        }
        navigateTo={navigateTo}
        type="Coffee"
      />
      <View>
        <Text style={styles.beanTitle}>Coffee beans</Text>
      </View>
      <List data={BeansData} navigateTo={navigateTo} type="Bean" />
    </ScrollView>
  );
};

export default HomeScreen;
