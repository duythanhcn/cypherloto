import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    width: Utils.hp(55),
    height: Utils.hp(55)
  },
  ballView: {
    width: Utils.hp(50),
    height: Utils.hp(50),
    borderRadius: Utils.hp(50 / 2),
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteBall: {
    backgroundColor: '#424169'
  },
  redBall: {
    backgroundColor: 'red'
  },
  numberText: {
    fontSize: Utils.hp(20),
    color: '#FFF',
    fontWeight: 'bold'
  },
  active: {
    backgroundColor: '#FFCF20'
  }
})