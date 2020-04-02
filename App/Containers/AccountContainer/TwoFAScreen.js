import React from 'react';
import Styles from './Styles/TwoFAScreenStyles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ggAuthen from '../../Images/Icons/ggauthen.png';

const TwoFAScreen = React.memo(props => {
  const { navigation } = props;

  return (
    <View style={Styles.container}>
      <View style={Styles.introView}>
        <Image style={Styles.ggAuthenIcon} source={ggAuthen} resizeMode='contain' />
        <Text style={Styles.firstTimeText}>
          To begin, you will need to install the <Text style={Styles.ggAuthenText}>Google Authenticator</Text> application on your phone.
          </Text>
      </View>
      <View style={Styles.actionView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ShowKey')}
          style={Styles.actionBtn}>
          <Text style={Styles.actionText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>)
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoFAScreen);