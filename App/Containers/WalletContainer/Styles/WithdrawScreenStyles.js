import { StyleSheet, Platform } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  //walletView
  walletView: {
    width: '100%',
    height: '45%',
    backgroundColor: '#f2f2f2',
    alignContent: 'center',
    paddingHorizontal: '3%'
  },
  walletBox: {
    height: '65%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  walletAdd: {
    fontSize: Utils.hp(Platform.OS === 'ios' ? 14 : 12)
  },
  walletWarning: {
    paddingVertical: '2%',
    fontSize: Utils.hp(Platform.OS === 'ios' ? 14 : 12)
  },
  walletWarningMess: {
    paddingHorizontal: '3%',
    fontSize: Utils.hp(Platform.OS === 'ios' ? 13 : 11)
  },
  walletTitle: {
    paddingVertical: '2%',
    fontSize: Utils.hp(Platform.OS === 'ios' ? 15 : 13)
  },
  walletCopy: {
    paddingTop: '3%'
  },
  //historyView
  historyView: {
    width: '100%',
    height: '55%',
  },
  historyHeader: {
    flex: 4,
    paddingHorizontal: '3%'
  },
  historyList: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerItem: {
    width: '100%',
    height: Utils.hp(Platform.OS === 'ios' ? 45 : 43),
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.hp(1)
  },
  itemText: {
    fontSize: Utils.hp(Platform.OS === 'ios' ? 13 : 11)
  },
  firstView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondView: {
    width: '47%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2'
  },
  thirdView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fourView: {
    width: '13%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  //input
  inputView: {
    width: '100%',
    height: Utils.hp(Platform.OS === 'ios' ? 38 : 36),
    borderWidth: Utils.hp(1),
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: '100%',
    fontSize: Utils.hp(Platform.OS === 'ios' ? 14 : 12)
  },
  submitView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: Utils.hp(Platform.OS === 'ios' ? 40 : 38),
    paddingTop: '2%'
  },
  btnSubmit: {
    backgroundColor: 'rebeccapurple',
    width: Utils.hp(Platform.OS === 'ios' ? 90 : 88),
    height: Utils.hp(Platform.OS === 'ios' ? 30 : 28),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Utils.hp(Platform.OS === 'ios' ? 10 : 8)
  },
  submitText: {
    color: '#FFF',
    fontSize: Utils.hp(Platform.OS === 'ios' ? 16 : 14)
  },
  borderTop: {
  },
  headerText: {
    fontSize: Utils.hp(Platform.OS === 'ios' ? 15 : 13)
  }
})