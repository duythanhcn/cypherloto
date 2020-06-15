import React, { useEffect, useState } from 'react';
import Styles from './Styles/TwoFAModelStyles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Dialog from 'react-native-popup-dialog';
import apiService from '../../Services/API';
import { connect } from 'react-redux';
import validation from '../../Common/validation';
import Message from '../../Common/Message';

const TwoFAModel = React.memo(props => {
  const { onChange, user } = props;
  const [isVisible, setVisible] = useState(props.isVisible);
  const [code, setCode] = useState(null);
  const [isKeyboard, setKeyBoard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setVisible(props.isVisible);
    if (!props.isVisible) {
      setKeyBoard(false)
    }
  }, [props.isVisible])

  async function onSubmit() {
    await checkToken(code);
  }

  async function checkToken(token) {
    const tokenError = validation('token', token);
    if (tokenError) {
      setErrorMessage(tokenError);
      return;
    }
    try {
      const response = await apiService.verifyQR(user.email, user.password, token);
      const { data, status } = response;
      if (status === 200 && !data.errors) {
        setErrorMessage('');
        onChange(true, token);
        setCode(null);
      } else {
        setErrorMessage(data.errors.message);
      }
    } catch (err) {
      setErrorMessage(Message.ServiceError);
    }
  }

  return (
    <Dialog
      visible={isVisible}
      width={0.9}
      height={0.4}
      onHardwareBackPress={() => false}
      onTouchOutside={() => {
        setErrorMessage('');
        onChange(false);
        setCode(null);
      }}
      dialogStyle={[Styles.dialogStyle, isKeyboard ? Styles.marginFocus : null]}>
      <View style={Styles.container}>
        <View style={Styles.titleView}>
          <Text style={Styles.titleText}>2 FA Code</Text>
        </View>
        <View style={Styles.inputView}>
          <TextInput
            keyboardType='number-pad'
            value={code}
            onChangeText={val => setCode(val !== '' ? val : null)}
            style={Styles.input}
            textContentType='telephoneNumber'
            onFocus={() => setKeyBoard(true)}
            onBlur={() => setKeyBoard(false)}
            onSubmitEditing={() => onSubmit()} />
          <Text style={Styles.errorMessage}>{errorMessage}</Text>
        </View>
        <View style={Styles.actionView}>
          <TouchableOpacity
            onPress={() => onSubmit()}
            style={Styles.btnView}>
            <Text style={Styles.btnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  );
})

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoFAModel);