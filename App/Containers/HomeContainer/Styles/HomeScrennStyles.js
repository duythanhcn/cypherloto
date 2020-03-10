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
    fontSize: Utils.hp(16),
    color: 'gray'
  },
  //balance
  balanceView: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconView: {
    width: Utils.hp(35),
    height: Utils.hp(35),
    paddingRight: '1%'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  cointText: {
    fontSize: Utils.hp(30),
    color: '#424169'
  },
  coinView: {
    paddingLeft: '1%'
  },
  //est
  estView: {
    flex: 3.5
  },
  estValueView: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
    paddingVertical: '2%'
  },
  esttitle: {
    fontSize: Utils.hp(14),
    color: 'gray'
  },
  estValue: {
    fontSize: Utils.hp(35),
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
    width: Utils.wp(60),
    height: Utils.wp(60),
    backgroundColor: '#3F4172',
    borderRadius: Utils.hp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  hourText: {
    color: '#FFCF20',
    fontSize: Utils.hp(25),
    fontWeight: 'bold'
  },
  hourDesc: {
    fontSize: Utils.hp(14),
    color: '#000'
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
    fontSize: Utils.hp(20)
  },
  winnerBody: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberView: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  nextNumber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  prevNumber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})