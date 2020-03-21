import { StyleSheet } from 'react-native'
import Utils from '../../../Common/Utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabView: {
    backgroundColor: '#f3f2f8'
  },
  activeTab: {
    backgroundColor: '#197BFF'
  },
  tabText: {
    color: '#197BFF',
    fontSize: Utils.hp(18)
  },
  tabActiveText: {
    color: '#FFF',
    fontSize: Utils.hp(18)
  },
  tabHeaderLeftInnerView: {
    width: '70%', height: '60%',
    backgroundColor: '#f3f2f8',
    justifyContent: 'center',
    borderColor: '#007aff',
    borderWidth: 1,
    borderTopLeftRadius: Utils.hp(10),
    borderBottomLeftRadius: Utils.hp(10),
    alignItems: 'center'
  },
  headerLeftView: {
    justifyContent: 'flex-end',
    backgroundColor: '#f3f2f8',
    alignItems: 'center'
  },
  tabHeaderRightInnerView: {
    width: '70%', height: '60%',
    backgroundColor: '#f3f2f8',
    justifyContent: 'center',
    borderColor: '#007aff',
    borderWidth: 1,
    borderTopRightRadius: Utils.hp(10),
    borderBottomRightRadius: Utils.hp(10),
    alignItems: 'center'
  },
  headerRightView: {
    justifyContent: 'flex-start',
    backgroundColor: '#f3f2f8',
    alignItems: 'center'
  }
})