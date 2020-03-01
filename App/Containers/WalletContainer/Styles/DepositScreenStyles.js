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
    height: '40%',
    backgroundColor: '#f2f2f2',
    alignContent: 'center',
    paddingHorizontal: '3%'
  },
  walletBox: {
    width: '100%',
    height: Utils.sp(60),
    borderWidth: Utils.sp(1),
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  walletAdd: {
    fontSize: Utils.sp(15)
  },
  walletWarning: {
    paddingVertical: '2%',
    fontSize: Utils.sp(16)
  },
  walletWarningMess: {
    paddingHorizontal: '3%',
    fontSize: Utils.sp(14)
  },
  walletTitle: {
    paddingVertical: '2%',
    fontSize: Utils.sp(16)
  },
  walletCopy: {
    paddingTop: '3%'
  },
  btnWalletCopy: {
    width: Utils.sp(110),
    height: Utils.sp(40),
    borderColor: '#d9d9d9',
    borderWidth: Utils.sp(1),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#e6e6e6'
  },
  copyText: {
    fontSize: Utils.sp(14),
    paddingLeft: '5%'
  },
  //historyView
  historyView: {
    width: '100%',
    height: '60%',
  },
  historyHeader: {
    flex: 3,
    paddingHorizontal: '3%'
  },
  historyList: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerItem: {
    width: '100%',
    height: Utils.sp(50),
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.sp(1)
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
})