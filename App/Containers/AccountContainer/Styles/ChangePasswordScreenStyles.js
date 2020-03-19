import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13161D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerView: {
    paddingHorizontal: '2%',
    paddingVertical: '10%'
  },
  actionView: {
    width: '100%',
    height: Utils.hp(90),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    backgroundColor: '#D91D5C',
    height: Utils.hp(45),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: Utils.hp(18)
  },
  errorView: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Utils.hp(100)
  },
  messageText: {
    color: 'red',
    fontSize: Utils.hp(14)
  },
})