import { StyleSheet } from 'react-native';
import Utils from '../../../Common/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  headerView: {
    width: '100%',
    height: Utils.hp(50),
    backgroundColor: '#F0F1F5',
    justifyContent: 'center',
    paddingHorizontal: '3%'
  },
  headerText: {
    fontSize: Utils.hp(16),
    color: 'gray'
  },
  signinView: {
    width: '100%',
    height: Utils.hp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    backgroundColor: '#D91D5C',
    height: Utils.hp(45),
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: Utils.hp(18)
  }
})