import React from 'react';
import styles from './headerStyle';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

const Header = () => {
  const dayBox = (
    <View style={styles.dayBox}>
      <Text style={styles.weekDay}>Sun</Text>
      <Text style={styles.monthDay}>1</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="menu" type="material-icons" size={25} color="#fff" />
        <Icon name="add" type="material-icons" raised size={25} />
      </View>

      <View style={styles.dateInfoContainer}>
        <View>
          <Text style={styles.dateYear}>2022</Text>
          <Text style={styles.dateMonth}>May</Text>
        </View>
        <View style={styles.dayStreakContainer}>
          <Text style={styles.dayStreakCount}>100</Text>
          <Icon
            name="local-fire-department"
            type="material-icons"
            size={30}
            color="#E16B00"
          />
        </View>
      </View>
      <View style={styles.dayBoxContainer}>{dayBox}{dayBox}{dayBox}{dayBox}{dayBox}</View>
    </View>
  );
};

export default Header;
