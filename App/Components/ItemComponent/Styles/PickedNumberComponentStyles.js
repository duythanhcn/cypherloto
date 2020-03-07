import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Utils.hp(55),
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