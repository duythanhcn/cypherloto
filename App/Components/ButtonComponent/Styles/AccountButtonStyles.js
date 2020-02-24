import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    width: Utils.hp(40),
    height: Utils.hp(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '3%'
  },
  actionView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  icon: {
    width: '80%',
    height: '80%'
  }
})