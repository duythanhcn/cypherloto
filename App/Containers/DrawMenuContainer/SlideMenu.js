import React from 'react';
import Styles from './Styles/SlideMenuStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const SideMenu = React.memo(props => {
  const { clearUser, navigation } = props;

  function signOut() {
    clearUser({});
    navigation.navigate('SignIn');
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.headerView}>
        <TouchableOpacity
          onPress={() => signOut()}>
          <Text style={Styles.headerText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>)
})


const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { clearUser: (data) => dispatch({ data, type: 'CLEAR_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);