import { StyleSheet } from 'react-native'
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
    width: '100%',
    height: Utils.hp(50),
    borderWidth: Utils.hp(1),
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  walletAdd: {
    fontSize: Utils.hp(13)
  },
  walletWarning: {
    paddingVertical: '2%',
    fontSize: Utils.hp(14)
  },
  walletWarningMess: {
    paddingHorizontal: '3%',
    fontSize: Utils.hp(13)
  },
  walletTitle: {
    paddingVertical: '2%',
    fontSize: Utils.hp(15)
  },
  walletCopy: {
    paddingTop: '5%'
  },
  btnWalletCopy: {
    width: Utils.hp(100),
    height: Utils.hp(30),
    borderColor: '#d9d9d9',
    borderWidth: Utils.hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#e6e6e6'
  },
  copyText: {
    fontSize: Utils.hp(14),
    paddingLeft: '5%'
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
    height: Utils.hp(45),
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.hp(1)
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
  itemText: {
    fontSize: Utils.hp(13)
  },
})