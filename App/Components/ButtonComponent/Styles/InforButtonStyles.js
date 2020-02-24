import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    width: Utils.hp(40),
    height: Utils.hp(40),
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
})