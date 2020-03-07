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
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickView: {
    width: '100%',
    height: '70%',
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
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    fontSize: Utils.hp(22),
    color: '#137EF4'
  },
  btnSave: {
    width: Utils.hp(130),
    height: Utils.hp(40),
    borderRadius: Utils.hp(40 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#137EF4'
  },
  saveText: {
    fontSize: Utils.hp(22),
    color: '#FFF'
  },
  headerPicker: {
    width: '100%',
    height: Utils.hp(70),
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
    flexDirection:'row',
    flexWrap:'wrap'
  },
  scrollView: {
    width: '100%'
  },
  lisContentStyle: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  headerText: {
    fontSize: Utils.hp(22),
    color: 'gray'
  }
})