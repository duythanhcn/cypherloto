import { StyleSheet, Dimensions } from 'react-native';
import Utils from '../../../Common/Utils';

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  seperatorView: {
    width: '100%',
    height: Utils.hp(20),
    backgroundColor: '#F0F1F5'
  },
  //header
  containerItem: {
    width: width,
    height: Utils.hp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondView: {
    width: '70%%',
    height: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  firstView: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  thirdView: {
    height: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: Utils.hp(16),
    fontWeight: 'bold'
  },
  itemText: {
    fontSize: Utils.hp(14),
    fontWeight: 'bold'
  },
  borderTop: {
    borderTopColor: 'gray',
    borderTopWidth: Utils.hp(1)
  },
  headerStyles: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  redItem: {
    color: 'red'
  },
  ballView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 8.5,
    alignItems: 'center'
  },
  starView: {
    justifyContent: 'flex-start',
    flex: 1.5,
    alignItems: 'center'
  },
  powerText: {
    fontSize: Utils.hp(16)
  }
})