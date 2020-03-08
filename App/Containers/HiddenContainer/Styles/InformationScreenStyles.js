import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  itemView: {
    width: '100%',
    height: Utils.hp(50),
    borderColor: 'gray',
    borderWidth: Utils.hp(1),
    flexDirection: 'row'
  },
  view1: {
    height: '100%',
    width: Utils.wp(260),
    flexDirection: 'row',
    paddingHorizontal: '2%',
    alignItems: 'center'
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    height: '100%',
    width: Utils.wp(130),
    borderLeftColor: 'gray',
    borderLeftWidth: Utils.hp(1),
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: Utils.hp(16),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  itemText: {
    fontSize: Utils.hp(14),
    textAlign: 'center'
  },
  odView: {
    backgroundColor: '#f2f2f2'
  }
})