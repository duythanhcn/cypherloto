import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  prevView: {
    zIndex: 9,
    position: 'absolute',
    left: '3%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextView: {
    zIndex: 9,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: '3%', height: '100%'
  },
  winnerBody: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  },
  winnerHeader: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  winnerDate: {
    fontSize: Utils.hp(16),
    fontWeight: 'bold'
  },
  numberView: {
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
})