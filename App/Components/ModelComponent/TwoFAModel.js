import React, { useEffect, useState } from 'react';
import Styles from './Styles/TwoFAModelStyles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from 'react-native-popup-dialog';

const TwoFAModel = React.memo(props => {
  const { onChange } = props;
  const [isVisible, setVisible] = useState(props.isVisible);
  const [code, setCode] = useState(null);
  const [isKeyboard, setKeyBoard] = useState(false);

  useEffect(() => {
    setVisible(props.isVisible);
  }, [props.isVisible])

  function onSubmit() {
    setKeyBoard(false)
    if (code) {
      onChange(code)
    }
  }

  return (
    <Dialog
      visible={isVisible}
      width={0.9}
      height={0.4}
      onHardwareBackPress={() => false}
      onTouchOutside={() => false}
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

export default TwoFAModel;