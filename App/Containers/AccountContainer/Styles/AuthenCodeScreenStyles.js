import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13161D'
  },
  firstTimeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introView: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e232e'
  },
  actionView: {
    width: '100%',
    height: '60%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '5%'
  },
  firstTimeText: {
    fontSize: Utils.hp(17),
    color: '#FFF',
    paddingHorizontal: '5%',
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '10%'
  },
  actionBtn: {
    backgroundColor: '#D91D5C',
    height: Utils.hp(45),
    width: '94%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    fontSize: Utils.hp(20),
    color: '#FFF',
  },
  keyView: {
    width: '94%',
    height: Utils.hp(50),
    backgroundColor: '#282f3e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: Utils.hp(20),
    color: '#FFF'
  },
  errorText: {
    fontSize: Utils.hp(13),
    color: 'red',
    marginTop: '5%'
  }
})