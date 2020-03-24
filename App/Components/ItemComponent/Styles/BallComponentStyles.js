import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    width: Utils.hp(50),
    height: Utils.hp(50),
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ballView: {
    width: Utils.hp(45),
    height: Utils.hp(45),
    borderRadius: Utils.hp(45 / 2),
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberText: {
    fontSize: Utils.hp(20),
    color: '#FFF',
    fontWeight: 'bold',
    position: 'absolute'
  },
  whiteText: {
    color: '#000'
  },
  ballItem: {
  }
})