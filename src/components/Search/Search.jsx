import {View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './Search.styles';
import {COLORS} from '../../theme';

const Search = ({search, setSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Find your coffee..."
        placeholderTextColor={COLORS.lightGrey}
        style={styles.inputFiled}
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};

export default Search;
