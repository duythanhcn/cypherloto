import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13161D',
    paddingTop: Utils.hp(60),
    paddingHorizontal: '5%'
  },
  headerView: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconView: {
    width: Utils.hp(50),
    height: Utils.hp(50),
    resizeMode: 'contain'
  },
  headerText: {
    color: '#FFF',
    marginLeft: '5%',
    fontSize: Utils.hp(28)
  },
  titleView: {
    flex: 1.5
  },
  titleText: {
    color: '#FFF',
    fontSize: Utils.hp(32)
  },
  contentView: {
    flex: 6
  },
  actionView: {
    width: '100%',
    height: Utils.hp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    backgroundColor: '#D91D5C',
    height: Utils.hp(50),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: Utils.hp(18)
  },
  footerView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '5%'
  },
  footerText: {
    color: 'gray',
    fontSize: Utils.hp(14),
  },
  redirectBtn: {

  },
  redirectBtnText: {
    color: '#FFF',
    fontSize: Utils.hp(15),
    fontWeight: 'bold',
    marginTop: '3%'
  },
  inputInnerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  innerChild: {
    width: '49%'
  },
  errorView: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  messageText: {
    color: 'red',
    fontSize: Utils.hp(14)
  }
})