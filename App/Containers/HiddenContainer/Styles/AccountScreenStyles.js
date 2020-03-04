import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  btnView: {
    width: '100%',
    height: Utils.sp(50),
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: '#202832'
  },
  btnText: {
    fontSize: Utils.sp(18),
    color: '#FFF'
  }
})