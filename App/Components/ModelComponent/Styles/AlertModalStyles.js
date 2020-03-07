import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  dialogStyle: {
    backgroundColor: '#00000000'
  },
  bodyView: {
    width: '100%',
    height: '80%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3%',
    borderTopEndRadius: Utils.hp(10),
    borderTopStartRadius: Utils.hp(10)
  },
  titleView: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: Utils.hp(18),
    fontWeight: 'bold'
  },
  contentView: {
    width: '100%',
    height: '75%',
    paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: Utils.hp(1),
    borderTopColor: 'gray'
  },
  contentText: {
    fontSize: Utils.hp(16),
    textAlign: 'center'
  },
  footerView: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: Utils.hp(10),
    borderBottomStartRadius: Utils.hp(10),
    flexDirection: 'row',
    borderTopColor: '#00A3B9',
    borderTopWidth: Utils.hp(1)
  },
  btnClose: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  btnBorderLeft: {
    borderLeftWidth: Utils.hp(1),
    borderLeftColor: '#00A3B9'
  },
  btnBorderRight: {
    borderRightWidth: Utils.hp(1),
    borderRightColor: '#00A3B9'
  },
  btnText: {
    color: '#00A3B9',
    fontSize: Utils.hp(18),
    fontWeight: 'bold'
  }
})