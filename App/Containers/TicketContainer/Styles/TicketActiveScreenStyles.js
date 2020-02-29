import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  seperatorView: {
    width: '100%',
    height: Utils.sp(1),
    backgroundColor: 'gray'
  },
  //header
  containerItem: {
    width: '100%',
    height: Utils.sp(50),
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: '2%',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.sp(1)

  },
  leftView: {
    height: '100%',
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  rightView: {
    height: '100%',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderLeftColor: 'gray',
    borderLeftWidth: Utils.sp(1)
  },
  headerText: {
    fontSize: Utils.sp(20),
    fontWeight: 'bold'
  },
  itemText: {
    fontSize: Utils.sp(18),
    paddingHorizontal: '2%'
  },
  borderTop: {
    borderTopColor: 'gray',
    borderTopWidth: Utils.sp(1)
  },
  headerStyles: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  redItem: {
    color: 'red'
  }
  //item
})