import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13161D'
  },
  inputView: {
    width: '100%',
    height: '50%',
    paddingHorizontal: '3%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionView: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '5%'
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
  errorText: {
    fontSize: Utils.hp(13),
    color: 'red',
    marginTop: '5%'
  }
})