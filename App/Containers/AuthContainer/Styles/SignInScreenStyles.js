import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13161D',
    paddingHorizontal: '5%'
  },
  innerView: {
    flex: 1,
    backgroundColor: '#13161D'
  },
  headerView: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconView: {
    width: Utils.hp(45),
    height: Utils.hp(45),
    resizeMode: 'contain'
  },
  headerText: {
    color: '#FFF',
    marginLeft: '5%',
    fontSize: Utils.hp(24)
  },
  titleView: {
    flex: 1
  },
  titleText: {
    color: '#FFF',
    fontSize: Utils.hp(20)
  },
  contentView: {
    flex: 6,
    justifyContent: 'center'
  },
  backView: {
    marginTop: '3%'
  },
  backText: {
    color: '#FFF',
    fontSize: Utils.hp(13)
  },
  errorView: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  messageText: {
    color: 'red',
    fontSize: Utils.hp(14)
  },
  actionView: {
    width: '100%',
    height: Utils.hp(90),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    backgroundColor: '#D91D5C',
    height: Utils.hp(45),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: Utils.hp(18)
  },
  btnDisable: {
    backgroundColor: 'gray'
  },
  footerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  footerText: {
    color: 'gray',
    fontSize: Utils.hp(14),
  },
  redirectBtn: {
    height: Utils.hp(50),
    width: Utils.hp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  redirectBtnText: {
    color: '#FFF',
    fontSize: Utils.hp(15),
    fontWeight: 'bold'
  }
})