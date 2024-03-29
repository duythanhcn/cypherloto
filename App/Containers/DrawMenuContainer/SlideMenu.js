import React, { useState, useEffect } from 'react';
import Styles from './Styles/SlideMenuStyles';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Storage from '../../Common/Storage';

const SideMenu = React.memo(props => {
  const { clearUser, navigation } = props;
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    setUser(props.user);
  }, [props.user])

  function signOut() {
    clearUser({});
    Storage.setLoginSession(null);
    navigation.navigate('Init');
  }

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <View style={Styles.headerView}>
          <Text style={Styles.headerText}>Account</Text>
        </View>
        <View style={Styles.itemView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={Styles.headerText}>Change Password</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.itemView}>
          <TouchableOpacity
            onPress={() => {
              if (user.enable_2fa) {
                navigation.navigate('DisableAuthen')
              } else {
                navigation.navigate('TwoFA')
              }
            }}>
            <Text style={Styles.headerText}>2FA Setting</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.itemView}>
          <TouchableOpacity
            onPress={() => signOut()}>
            <Text style={Styles.headerText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>)
})


const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { clearUser: (data) => dispatch({ data, type: 'CLEAR_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);