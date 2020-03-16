import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202832'
  },
  headerView: {
    width: '100%',
    height: Utils.hp(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.hp(1)
  },
  itemView: {
    width: '100%',
    height: Utils.hp(50),
    justifyContent: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: Utils.hp(1),
    paddingHorizontal: '5%'
  },
  headerText: {
    fontSize: Utils.hp(20),
    color: '#FFF',
    fontWeight: 'bold'
  }
})