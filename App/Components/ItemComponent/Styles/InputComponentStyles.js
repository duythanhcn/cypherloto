import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  inputView: {
    width: '100%',
    height: Utils.hp(90)
  },
  inputComponent: {
    borderWidth: 1,
    backgroundColor: '#191F27',
    borderColor: '#191F27',
    height: Utils.hp(45),
    marginTop: '3%',
    flexDirection: 'row'
  },
  inputDescText: {
    color: 'gray',
    fontSize: Utils.hp(14)
  },
  input: {
    height: Utils.hp(45),
    width: '85%',
    color: '#FFF',
    paddingHorizontal: '2%',
    fontSize: Utils.hp(16)
  },
  inputIcon: {
    height: Utils.hp(45),
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})