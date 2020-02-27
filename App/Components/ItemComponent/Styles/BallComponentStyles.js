import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    margin: '1%'
  },
  ballView: {
    width: Utils.sp(50),
    height: Utils.sp(50),
    borderRadius: Utils.sp(50 / 2),
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
    fontSize: Utils.sp(20),
    color: '#FFF',
    fontWeight: 'bold'
  }
})