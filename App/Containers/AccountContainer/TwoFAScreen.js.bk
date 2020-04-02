import React, { useEffect, useState } from 'react';
import Styles from './Styles/TwoFAScreenStyles';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import { connect } from 'react-redux';
import apiService from '../../Services/API';
import Utils from '../../Common/Utils';
import TwoFAModel from '../../Components/ModelComponent/TwoFAModel';

const TwoFAScreen = React.memo(props => {
  const { navigation, user, setUser } = props;
  const [isEnable, setEnable] = useState(user.enable_2fa);
  const [qrString, setQRString] = useState('');
  const [isShow2FA, setShow2FA] = useState(false);

  useEffect(() => {
    get2FA();
  }, [])

  async function enable2FA(code) {
    const response = await apiService.enable2FA(user.email, user.password, code);
    const { data, status } = response;
    if (status === 200 && !data.errors) {
      setEnable(true);
      setUser({ enable_2fa: true });
    }
  }

  async function disable2FA(code) {
    const response = await apiService.disable2FA(user.email, user.password, code);
    const { data, status } = response;
    if (status === 200 && !data.errors) {
      setEnable(false);
      setUser({ enable_2fa: false });
    }
  }

  async function set2FA(code) {
    if (isEnable) {
      disable2FA(code);
    } else {
      enable2FA(code);
    }
  }

  async function get2FA() {
    const response = await apiService.createQR(user.email, user.password);
    const { data, status } = response;
    if (status === 200 && !data.errors) {
      const { secret } = data;
      setQRString(secret);
    }
  }

  function onSignInSuccess(status, code) {
    setShow2FA(false);
    if (status) {
      set2FA(code);
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.radioBtnView}>
        <Text style={Styles.radioText}>Enable</Text>
        <View style={Styles.radioInnerView}>
          <SwitchToggle
            backTextRight={isEnable ? '' : 'ON'}
            backTextLeft={isEnable ? 'OFF' : ''}
            type={1}
            buttonStyle={Styles.toggleButtonStyle}
            rightContainerStyle={Styles.toggleRightContainerStyle}
            leftContainerStyle={Styles.toggleLeftContainerStyle}
            textRightStyle={Styles.toggleTextRightStyle}
            textLeftStyle={Styles.toggleTextLeftStyle}
            containerStyle={Styles.toggleContainerStyle}
            backgroundColorOn="#FFF"
            backgroundColorOff="#004E79"
            circleStyle={Styles.toggleCircleStyle}
            switchOn={isEnable}
            onPress={() => setShow2FA(true)}
            circleColorOff="#FFF"
            circleColorOn="#004E79"
            duration={300}
          />
        </View>
      </View>
      <View style={Styles.qrView}>
        <Text style={Styles.qrString}>{qrString}</Text>
        <Text style={Styles.orText}>Or</Text>
        <View style={Styles.qrImage}>
          <QRCode size={Utils.hp(150)} value={`otpauth://totp/Cypher_Lotto:${user.email}?secret=${qrString}&issuer=Cypher_Lottery`} />
        </View>
      </View>
      <TwoFAModel
        isVisible={isShow2FA}
        onChange={(status, code) => onSignInSuccess(status, code)} />
    </View>)
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoFAScreen);