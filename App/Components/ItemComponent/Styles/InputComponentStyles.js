import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  inputView: {
    width: '100%',
    height: Utils.hp(100)
  },
  inputComponent: {
    borderWidth: 1,
    backgroundColor: '#191F27',
    borderColor: '#191F27',
    height: Utils.hp(50),
    marginTop: '3%',
    flexDirection: 'row'
  },
  inputDescText: {
    color: 'gray'
  },
  input: {
    height: Utils.hp(50),
    width: '85%',
    color: '#FFF',
    paddingHorizontal: '2%'
  },
  inputIcon: {
    height: Utils.hp(50),
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})