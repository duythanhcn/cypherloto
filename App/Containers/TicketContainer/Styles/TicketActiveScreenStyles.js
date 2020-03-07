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
    height: Utils.hp(50),
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.hp(1)
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
    backgroundColor: '#f2f2f2'
  },
  headerText: {
    fontSize: Utils.hp(20),
    fontWeight: 'bold'
  },
  itemText: {
    fontSize: Utils.hp(18),
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
  },
  ballView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 8.5,
    alignItems: 'center'
  },
  starView: {
    justifyContent: 'flex-start',
    flex: 1.5,
    alignItems: 'center'
  }
})