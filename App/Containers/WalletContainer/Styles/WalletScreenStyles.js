import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabView: {
    backgroundColor: '#FFF'
  },
  activeTab: {
    backgroundColor: '#197BFF'
  },
  tabText: {
    color: '#197BFF',
    fontSize: Utils.hp(20)
  },
  tabActiveText: {
    color: '#FFF',
    fontSize: Utils.hp(20)
  }
})