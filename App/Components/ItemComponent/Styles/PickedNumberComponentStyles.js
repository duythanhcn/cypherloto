import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Utils.hp(80),
    flexDirection: 'row'
  },
  innerView: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ballView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  powerView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  powerText: {
    fontSize: Utils.hp(16)
  },
  actionView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  btnRemove: {
    width: Utils.hp(20),
    height: Utils.hp(20),
    borderRadius: Utils.hp(20 / 2),
    backgroundColor: '#FFF',
    borderColor: '#137EF4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  }
})