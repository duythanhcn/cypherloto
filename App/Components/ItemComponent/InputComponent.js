import React, { useEffect, useState } from 'react';
import Styles from './Styles/InputComponentStyles';
import { View, Text, TextInput } from 'react-native';
import Utils from '../../Common/Utils';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const InputComponent = React.memo(props => {
  const { navigation, icon, placeHolder, onChange, title, value, type } = props;
  const [_value, setValue] = useState(value);


  useEffect(() => {
    onChange(_value)
  }, [_value])

  return (
    <View style={Styles.inputView}>
      <Text style={Styles.inputDescText}>{title}</Text>
      <View style={Styles.inputComponent}>
        <TextInput
          value={_value}
          style={Styles.input}
          placeholder={placeHolder}
          placeholderTextColor='gray'
          textContentType={type}
          onChangeText={val => setValue(val)}
          numberOfLines={1}
          secureTextEntry={type === 'password'}
        />
        <View style={Styles.inputIcon}>
          <Icon name={icon} color='#FFF' size={Utils.hp(20)} />
        </View>
      </View>
    </View>
  )
})

export default InputComponent;