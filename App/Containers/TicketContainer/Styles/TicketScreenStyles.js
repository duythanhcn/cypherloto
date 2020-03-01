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
    fontSize: Utils.sp(24)
  },
  tabActiveText: {
    color: '#FFF',
    fontSize: Utils.sp(24)
  }
})