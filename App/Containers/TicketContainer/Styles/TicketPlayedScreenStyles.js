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
  headerText: {
    fontSize: Utils.hp(18),
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
  //item
  firstView: {
    width: '17%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondView: {
    width: '55%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2'
  },
  thirdView: {
    width: '13%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fourView: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  amountStyle: {
    alignItems: 'flex-end'
  },
  ballView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 9,
    alignItems: 'center'
  },
  starView: {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'flex-start'
  }
})