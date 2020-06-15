import React, { useEffect, useState } from 'react';
import Styles from './Styles/ShowKeyScreenStyles';
import { View, Text, Image, TouchableOpacity, Clipboard } from 'react-native';
import { connect } from 'react-redux';
import apiService from '../../Services/API';
import write from '../../Images/Icons/write.png';

const ShowKeyScreen = React.memo(props => {
  const { navigation, user } = props;
  const [qrString, setQRString] = useState('');

  useEffect(() => {
    get2FA();
  }, [])

  async function get2FA() {
    try {
      const response = await apiService.createQR(user.email, user.password);
      const { data, status } = response;
      if (status === 200 && !data.errors) {
        const { secret } = data;
        setQRString(secret);
      }
    } catch (err) { }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.introView}>
        <Image style={Styles.ggAuthenIcon} source={write} resizeMode='contain' />
        <Text style={Styles.firstTimeText}>
          Please save this key on paper. This key will allow you to recover your <Text style={Styles.ggAuthenText}>Google Authentication</Text> in case of your phone loss.
          </Text>
        <View style={Styles.keyView}>
          <TouchableOpacity
            style={Styles.keyView}
            onPress={() => Clipboard.setString(qrString)} >
            <Text style={Styles.qrCode}>{qrString}</Text>
            <Text style={Styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.actionView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AuthenCode', { code: qrString })}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowKeyScreen);