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
    height: Utils.hp(1),
    backgroundColor: 'gray'
  },
  //header
  containerItem: {
    width: '100%',
    height: Utils.hp(45),
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.hp(1)

  },
  leftView: {
    height: '100%',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightView: {
    height: '100%',
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2'
  },
  headerText: {
    fontSize: Utils.hp(18),
    fontWeight: 'bold'
  },
  itemText: {
    fontSize: Utils.hp(16),
    paddingHorizontal: '2%'
  },
  borderTop: {
    borderTopColor: 'gray',
    borderTopWidth: Utils.hp(1)
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