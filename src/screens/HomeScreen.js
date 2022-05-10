import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header/Header';
import ShowLayout from '../components/layouts/show-layout/ShowLayout';
import CSS_VARIABLES from '../assets/styling/CssVariables';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ShowLayout />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: CSS_VARIABLES.mainColor},
});

export default HomeScreen;
