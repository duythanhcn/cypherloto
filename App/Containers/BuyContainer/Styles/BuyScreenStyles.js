import { StyleSheet } from 'react-native';
import Utils from '../../../Common/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  actionView: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '3%',
    flexDirection: 'row'
  },
  cancelView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  actionText: {
    color: '#137EF4',
    fontSize: Utils.hp(20)
  },
  addView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    color: '#137EF4',
    fontWeight: 'normal'
  },
  btnAdd: {
    width: Utils.hp(50),
    height: Utils.hp(50),
    borderRadius: Utils.hp(50 / 2),
    backgroundColor: '#FFF',
    borderColor: '#137EF4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  buyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  ///
  bodyView: {
    flex: 7.5
  },
  headerListView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F1F5'
  },
  headerListText: {
    fontSize: Utils.hp(20),
    color: 'gray'
  },
  bodyListView: {
    flex: 9
  },
  listView: {
    flex: 1
  },
  seperatorView: {
    width: '100%',
    height: Utils.hp(20),
    backgroundColor: '#F0F1F5'
  }
})