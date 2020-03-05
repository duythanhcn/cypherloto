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
    borderTopEndRadius: Utils.wp(10),
    borderTopStartRadius: Utils.wp(10)
  },
  titleView: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: Utils.wp(18),
    fontWeight: 'bold'
  },
  contentView: {
    width: '100%',
    height: '75%',
    paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: Utils.wp(1),
    borderTopColor: 'gray'
  },
  contentText: {
    fontSize: Utils.wp(16),
    textAlign: 'center'
  },
  footerView: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: Utils.wp(10),
    borderBottomStartRadius: Utils.wp(10),
    flexDirection: 'row',
    borderTopColor: '#00A3B9',
    borderTopWidth: Utils.wp(1)
  },
  btnClose: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  btnBorderLeft: {
    borderLeftWidth: Utils.wp(1),
    borderLeftColor: '#00A3B9'
  },
  btnBorderRight: {
    borderRightWidth: Utils.wp(1),
    borderRightColor: '#00A3B9'
  },
  btnText: {
    color: '#00A3B9',
    fontSize: Utils.wp(18),
    fontWeight: 'bold'
  }
})