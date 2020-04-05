import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import DataStorage from '../Services/DataStorage';
import SearchInputScreen from '../Containers/SearchContainer/SearchInputScreen';
import Utils from '../Common/Utils';
import SearchResultScreen from '../Containers/SearchContainer/SearchResultScreen';
import LogoTitle from '../Components/ItemComponent/LogoTitle';

const Styles = StyleSheet.create({
  leftButton: {
    width: Utils.wp(100),
    height: '100%',
    justifyContent: 'center',
    paddingLeft: '5%'
  },
  rightButton: {
    width: Utils.wp(100),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '5%'
  },
  textBtn: {
    fontSize: Utils.hp(18),
    color: '#147EFB'
  }
});

const SearchStack = createStackNavigator(
  {
    SearchInput: {
      screen: SearchInputScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={Styles.leftButton}>
          <Text style={Styles.textBtn}>Cancel</Text>
        </TouchableOpacity>),
        headerRight: (<TouchableOpacity onPress={() => navigation.navigate('SearchResult')} style={Styles.rightButton}>
          <Text style={Styles.textBtn}>Search</Text>
        </TouchableOpacity>)
      })
    },
    SearchResult: {
      screen: SearchResultScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (<HeaderBackButton onPress={() => navigation.navigate(DataStorage.CURRENT_TAB)} />),
        headerRight: (<TouchableOpacity onPress={() => navigation.goBack()} style={Styles.rightButton}>
          <Text style={Styles.textBtn}>Search</Text>
        </TouchableOpacity>)
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackTitle: null,
      gesturesEnabled: false,
      headerTitle: <LogoTitle title='Search' />
    })
  })

export default SearchStack
