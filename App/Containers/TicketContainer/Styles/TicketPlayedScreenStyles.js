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
    paddingHorizontal: '1%',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.sp(1)
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
  },
  //item
  firstView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondView: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  thirdView: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fourView: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  amountStyle: {
    alignItems: 'flex-end'
  }
})