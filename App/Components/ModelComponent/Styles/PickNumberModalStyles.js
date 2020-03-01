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
    alignItems: 'center'
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
    fontSize: Utils.sp(22),
    color: '#137EF4'
  },
  btnSave: {
    width: Utils.sp(130),
    height: Utils.sp(40),
    borderRadius: Utils.sp(40 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#137EF4'
  },
  saveText: {
    fontSize: Utils.sp(22),
    color: '#FFF'
  },
  headerPicker: {
    width: '100%',
    height: Utils.sp(70),
    backgroundColor: '#F0F1F5',
    justifyContent: 'center',
    paddingHorizontal: '3%'
  },
  pickerLayer: {
    width: '100%',
    alignItems: 'center'
  },
  numberView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    width: Utils.sp(350)
  },
  scrollView: {
    width: '100%'
  },
  listView1: {
    height: Utils.sp(700),
    marginVertical: '2%',
    alignSelf: 'center'
  },
  listView2: {
    width: '100%',
    height: Utils.sp(250),
    marginVertical: '2%'
  },
  headerText: {
    fontSize: Utils.sp(22),
    color: 'gray'
  }
})