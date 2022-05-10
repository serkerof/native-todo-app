import React from 'react';
import styles from './headerStyle';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="add" type="material-icons" raised size={25} />
      </View>

      <View></View>

      <View></View>
    </View>
  );
};

export default Header;
