import { StyleSheet } from 'react-native';
import Utils from '../../../Common/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  headerView: {
    flex: 1,
    backgroundColor: '#F0F1F5',
    justifyContent: 'center',
    paddingHorizontal: '3%'
  },
  headerText: {
    fontSize: Utils.sp(20),
    color: 'gray'
  },
  //balance
  balanceView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconView: {
    width: Utils.sp(40),
    height: Utils.sp(40),
    paddingRight: '1%'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  cointText: {
    fontSize: Utils.sp(40),
    color: '#424169'
  },
  coinView: {
    paddingLeft: '1%'
  },
  //est
  estView: {
    flex: 3
  },
  estValueView: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
    paddingVertical: '2%'
  },
  esttitle: {
    fontSize: Utils.sp(16),
    color: 'gray'
  },
  estValue: {
    fontSize: Utils.sp(40),
    color: '#000'
  },
  nextDrawView: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeView: {
    alignItems: 'center',
    padding: '1%'
  },
  timeDrawView: {
    flexDirection: 'row'
  },
  hour: {
    width: Utils.sp(70),
    height: Utils.sp(70),
    backgroundColor: '#3F4172',
    borderRadius: Utils.sp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  hourText: {
    color: '#FFCF20',
    fontSize: Utils.sp(30),
    fontWeight: 'bold'
  },
  hourDesc: {
    fontSize: Utils.sp(16)
  },
  //winner
  winnerView: {
    flex: 2
  },
  winnerHeader: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  winnerDate: {
    fontSize: Utils.sp(22)
  },
  winnerBody: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberView: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  nextNumber: {
    flex: 1
  },
})