import { StyleSheet } from 'react-native';
import Utils from '../../../Common/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  actionView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '3%',
    flexDirection: 'row'
  },
  cancelView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  actionText: {
    color: '#137EF4',
    fontSize: Utils.sp(24)
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
    width: Utils.sp(50),
    height: Utils.sp(50),
    borderRadius: Utils.sp(50 / 2),
    backgroundColor: '#FFF',
    borderColor: '#137EF4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  buyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ///
  bodyView: {
    flex: 9
  },
  headerListView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F1F5'
  },
  headerListText: {
    fontSize: Utils.sp(20),
    color: 'gray'
  },
  bodyListView: {
    flex: 9
  },
  listView: {
    flex: 1
  },
  seperatorView: {
    height: Utils.sp(1),
    width: '100%',
    backgroundColor: 'gray'
  }
})