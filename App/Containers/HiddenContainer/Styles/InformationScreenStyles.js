import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: Utils.hp(16),
    paddingVertical: '2%',
    textAlign: 'center'
  }
})