import { StyleSheet } from 'react-native';
import Utils from '../../../Common/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  headerView: {
    width: '100%',
    height: Utils.hp(50),
    backgroundColor: '#F0F1F5',
    justifyContent: 'center',
    paddingHorizontal: '3%'
  },
  headerText: {
    fontSize: Utils.hp(16),
    color: 'gray'
  },
  //est
  estView: {
    width: '100%',
    height: Utils.hp(200),
  },
  estValueView: {
    alignItems: 'center',
    flex: 5,
    justifyContent: 'center',
    paddingVertical: '2%'
  },
  esttitle: {
    fontSize: Utils.hp(14),
    color: 'gray'
  },
  estValue: {
    fontSize: Utils.hp(45),
    color: '#000'
  },
  nextDrawView: {
    flex: 5,
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
    width: Utils.wp(50),
    height: Utils.wp(50),
    backgroundColor: '#3F4172',
    borderRadius: Utils.hp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  hourText: {
    color: '#FFCF20',
    fontSize: Utils.hp(20),
    fontWeight: 'bold'
  },
  hourDesc: {
    fontSize: Utils.hp(13),
    color: '#000'
  },
  //winner
  winnerView: {
    width: '100%',
    height: Utils.hp(150),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  winnerHeader: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  winnerDate: {
    fontSize: Utils.hp(18),
    fontWeight: 'bold'
  },
  winnerBody: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    height: '100%'
  },
  numberView: {
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  powerText: {
    fontSize: Utils.hp(16),
    fontWeight: 'bold'
  },
  payoutValue: {
    fontSize: Utils.hp(14),
    fontWeight: 'bold'
  },
  winner: {
    fontSize: Utils.hp(14),
  },
  nextNumber: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  prevNumber: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  payoutView: {
    width: '100%',
    height: Utils.hp(50),
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.hp(1),
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: '2%'
  },
  view1: {
    height: '100%',
    width: '33.33%',
    justifyContent: 'center'
  },
  view2: {
    height: '100%',
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view3: {
    height: '100%',
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  payoutHeader: {
    fontWeight: 'bold'
  },
  signinView: {
    width: '100%',
    height: Utils.hp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    backgroundColor: '#D91D5C',
    height: Utils.hp(45),
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: Utils.hp(18)
  }
})