import React, { useEffect, useState } from 'react';
import Styles from './Styles/TwoFAScreenStyles';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import { connect } from 'react-redux';

const TwoFAScreen = React.memo(props => {
  const { navigation, user, setUser } = props;
  const [isEnable, setEnable] = useState(user.enable_2fa);

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
            onPress={() => setEnable(!isEnable)}
            circleColorOff="#FFF"
            circleColorOn="#004E79"
            duration={300}
          />
        </View>
      </View>
      <View>
        <QRCode
          value="http://awesome.link.qr"
        />
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