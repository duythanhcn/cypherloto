import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: Utils.hp(24),
    marginTop: '5%',
    marginBottom: '15%'
  },
  containerItem: {
    width: '100%',
    height: Utils.hp(160),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timeText: {
    fontSize: Utils.hp(16),
    fontWeight: 'bold'
  },
  ballView: {
    width: '70%',
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
  seperatorView: {
    width: '100%',
    height: Utils.hp(20),
    backgroundColor: '#F0F1F5'
  },
})