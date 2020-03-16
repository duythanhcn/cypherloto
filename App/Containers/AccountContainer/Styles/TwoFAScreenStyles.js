import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  radioInnerView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
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
    color: '#FFF'
  },
  toggleTextLeftStyle: {
    fontSize: Utils.hp(14),
    fontWeight: 'bold',
    color: '#004E79'
  },
  toggleContainerStyle: {
    marginTop: 0,
    width: Utils.hp(70),
    height: Utils.hp(30),
    borderRadius: Utils.hp(30 / 2),
    padding: Utils.hp(2),
    borderColor: '#004E79',
    borderWidth: Utils.hp(1),
  },
  toggleCircleStyle: {
    width: Utils.hp(24),
    height: Utils.hp(24),
    borderRadius: Utils.hp(24 / 2),
    backgroundColor: 'blue'
  },
  radioText: {
    fontSize: Utils.hp(16),
    fontWeight: 'bold'
  },
  radioBtnView: {
    width: '90%',
    alignSelf: 'center',
    borderTopWidth: Utils.hp(1),
    borderTopColor: '#FFF',
    paddingVertical: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})