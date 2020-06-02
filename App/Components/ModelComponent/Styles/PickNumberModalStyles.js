import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  dialogStyle: {
    backgroundColor: '#FFF'
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  currentView: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickView: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  pickedNumber: {
    flexDirection: 'row'
  },
  saveView: {
    width: '100%',
    height: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  actionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '3%'
  },
  btnAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    fontSize: Utils.hp(16),
    color: '#137EF4'
  },
  btnSave: {
    width: Utils.hp(110),
    height: Utils.hp(30),
    borderRadius: Utils.hp(30 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#137EF4'
  },
  saveText: {
    fontSize: Utils.hp(20),
    color: '#FFF'
  },
  headerPicker: {
    width: '100%',
    height: Utils.hp(50),
    backgroundColor: '#F0F1F5',
    justifyContent: 'center',
    paddingHorizontal: '3%'
  },
  pickerLayer1: {
    width: '100%'
  },
  pickerLayer2: {
    width: '100%'
  },
  numberView: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: Utils.hp(10),
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  scrollView: {
    width: '100%'
  },
  lisContentStyle: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  headerText: {
    fontSize: Utils.hp(16),
    color: 'gray'
  },
  powerView: {
    flexDirection: 'row',
    width: '100%',
    height: Utils.hp(50),
    alignItems: 'center',
    paddingTop: '5%',
    paddingHorizontal: '3%'
  },
  radioInnerView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    paddingLeft: '5%'
  },
  toggleButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  toggleRightContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleLeftContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  toggleTextRightStyle: {
    fontSize: Utils.hp(14),
    fontWeight: 'bold',
    color: 'red'
  },
  toggleTextLeftStyle: {
    fontSize: Utils.hp(14),
    fontWeight: 'bold',
    color: '#197BFF'
  },
  toggleOnContainerStyle: {
    marginTop: 0,
    width: Utils.hp(70),
    height: Utils.hp(30),
    borderRadius: Utils.hp(30 / 2),
    padding: Utils.hp(2),
    borderColor: '#197BFF',
    borderWidth: Utils.hp(1),
  },
  toggleOffContainerStyle: {
    marginTop: 0,
    width: Utils.hp(70),
    height: Utils.hp(30),
    borderRadius: Utils.hp(30 / 2),
    padding: Utils.hp(2),
    borderColor: 'red',
    borderWidth: Utils.hp(1),
  },
  toggleCircleStyle: {
    width: Utils.hp(24),
    height: Utils.hp(24),
    borderRadius: Utils.hp(24 / 2),
    backgroundColor: '#197BFF'
  },
  powerText: {
    fontSize: Utils.hp(16),
    fontWeight: 'bold'
  }
})