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
    height: '65%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  walletAdd: {
    fontSize: Utils.hp(15)
  },
  walletWarning: {
    paddingVertical: '2%',
    fontSize: Utils.hp(16)
  },
  walletWarningMess: {
    paddingHorizontal: '3%',
    fontSize: Utils.hp(14)
  },
  walletTitle: {
    paddingVertical: '2%',
    fontSize: Utils.hp(16)
  },
  walletCopy: {
    paddingTop: '3%'
  },
  btnWalletCopy: {
    width: Utils.hp(110),
    height: Utils.hp(40),
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
    height: Utils.hp(50),
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
  //input
  inputView: {
    width: '100%',
    height: Utils.hp(50),
    borderWidth: Utils.hp(1),
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: '100%'
  },
  submitView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: Utils.hp(50),
  },
  btnSubmit: {
    backgroundColor: 'rebeccapurple',
    width: Utils.hp(120),
    height: Utils.hp(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Utils.hp(10)
  },
  submitText: {
    color: '#FFF',
    fontSize: Utils.hp(18)
  }
})