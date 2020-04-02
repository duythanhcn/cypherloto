import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  timeItem: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%'
  },
  timeView: {
    width: Utils.wp(50),
    height: Utils.wp(50),
    backgroundColor: '#3F4172',
    borderRadius: Utils.hp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeDigit: {
    color: '#FFCF20',
    fontSize: Utils.hp(20),
    fontWeight: 'bold'
  },
  timeUnit: {
    fontSize: Utils.hp(13),
    color: '#000'
  }
})