import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  dialogStyle: {
    backgroundColor: '#00000000'
  },
  bodyView: {
    width: '100%',
    height: '75%',
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
    justifyContent: 'flex-end',
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
    justifyContent: 'center'
  },
  contentText: {
    fontSize: Utils.hp(18),
    textAlign: 'center'
  },
  footerView: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: Utils.hp(10),
    borderBottomStartRadius: Utils.hp(10),
    flexDirection: 'row',
    borderTopColor: 'gray',
    borderTopWidth: Utils.hp(1)
  },
  btnClose: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  btnBorderLeft: {
    borderLeftWidth: Utils.hp(0.5),
    borderLeftColor: 'gray'
  },
  btnBorderRight: {
    borderRightWidth: Utils.hp(0.5),
    borderRightColor: 'gray'
  },
  btnText: {
    color: '#147EFB',
    fontSize: Utils.hp(18)
  }
})