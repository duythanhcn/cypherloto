import { StyleSheet, Dimensions } from 'react-native'
import Utils from '../../../Common/Utils'

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  seperatorView: {
    width: '100%',
    height: Utils.hp(1),
    backgroundColor: 'gray'
  },
  //header
  containerItem: {
    width: width,
    height: Utils.hp(100),
    paddingHorizontal: '2%',
    alignItems: 'center',
    backgroundColor: '#FFF'
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
  //item
  firstView: {
    width: '100%',
    height: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  secondView: {
    width: '70%%',
    height: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  thirdView: {
    width: '100%',
    height: '25%%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  amountStyle: {
    alignItems: 'flex-end'
  },
  listView: {
    flex: 1
  },
  powerText: {
    fontSize: Utils.hp(16)
  }
})