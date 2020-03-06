import React from 'react';
import Styles from './Styles/AccountScreenStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const AccountScreen = React.memo(props => {
  const { clearUser, navigation } = props;

  function signOut() {
    clearUser({});
    navigation.navigate('SignIn');
  }

  return (
    <View style={{}}>
      <TouchableOpacity
        style={Styles.btnView}
        onPress={() => signOut()}>
        <Text style={Styles.btnText}>Sign Out</Text>
      </TouchableOpacity>
    </View>);
})

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { clearUser: (data) => dispatch({ data, type: 'CLEAR_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);