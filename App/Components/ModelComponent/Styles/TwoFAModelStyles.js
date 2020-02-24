import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  dialogStyle: {
    backgroundColor: '#FFF',
    height: Utils.hp(300),
    width: '90%'
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  titleView: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#147EFB'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: Utils.wp(20),
    color: '#FFF'
  },
  inputView: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: Utils.hp(50),
    borderColor: 'gray',
    borderWidth: 1
  },
  actionView: {
    width: '100%',
    height: '20%',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnView: {
    width: '40%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#147EFB',
    borderRadius: Utils.hp(5)
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: Utils.wp(20),
    color: '#FFF'
  },
  marginFocus: {
    marginBottom: Utils.hp(200)
  }
})