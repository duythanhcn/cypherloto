import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  seperatorView: {
    width: '100%',
    height: Utils.hp(30),
    backgroundColor: '#F0F1F5'
  },
  //header
  containerItem: {
    width: '100%',
    height: Utils.hp(120),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  listView: {
    flex: 1
  },
  ballView: {
    width: '70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  powerText: {
    fontSize: Utils.hp(20),
    color: '#ffb00b'
  },
  timeText: {
    fontSize: Utils.hp(22)
  }
})