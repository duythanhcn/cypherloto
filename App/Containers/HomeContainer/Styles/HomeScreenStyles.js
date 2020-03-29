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
  payoutView: {
    width: '100%',
    height: Utils.hp(40),
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.hp(1),
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: '2%'
  },
  payoutText: {
    fontSize: Utils.hp(16),
    textAlign: 'center'
  },
  view1: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  view2: {
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view3: {
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  payoutHeader: {
    fontWeight: 'bold'
  }
})