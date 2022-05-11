import {StyleSheet} from 'react-native';
import CSS_VARIABLES from '../../assets/styling/CssVariables';

export default StyleSheet.create({
  container: {
    flex: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  dateInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  dateYear: {
    color: 'white',
  },
  dateMonth: {
    color: 'white',
    fontSize: 18,
  },
  dayStreakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayStreakCount: {
    marginRight: 5,
    fontSize: 18,
    color: 'white',
  },
  dayBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 2,
  },
  dayBox: {
    flex: 1,
    padding: 15,
    backgroundColor: '#585DFF',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 5
  },
  weekDay: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  monthDay: {
    color: 'white',
    fontSize: 16,
  },
  activeDay: {
    backgroundColor: 'white',
  },
  fontBlue: {
    color: CSS_VARIABLES.mainColor,
  },
});
