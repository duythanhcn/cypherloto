import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13161D'
  },
  introView: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e232e'
  },
  ggAuthenIcon: {
    width: Utils.hp(100),
    height: Utils.hp(100)
  },
  actionView: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '5%'
  },
  firstTimeText: {
    fontSize: Utils.hp(17),
    color: '#FFF',
    marginTop: '5%',
    textAlign: 'center',
    paddingHorizontal: '5%'
  },
  ggAuthenText: {
    color: '#FFCF20'
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
  }
})