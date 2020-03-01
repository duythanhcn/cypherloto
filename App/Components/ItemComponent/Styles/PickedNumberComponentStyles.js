import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Utils.sp(70),
    flexDirection: 'row'
  },
  innerView: {
    flexDirection: 'row',
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  powerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  actionView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  btnRemove: {
    width: Utils.sp(40),
    height: Utils.sp(40),
    borderRadius: Utils.sp(40 / 2),
    backgroundColor: '#FFF',
    borderColor: '#137EF4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  }
})