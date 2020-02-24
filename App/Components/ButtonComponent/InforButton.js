import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/InforButtonStyles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Utils from '../../Common/Utils';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const InforButton = React.memo(props => {
  const { navigation } = props;
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.actionView}
        onPress={() => navigation.navigate('Info')}>
        <Icon name='info-circle' color='#147EFB' size={Utils.hp(25)} />
      </TouchableOpacity>
    </View>);
})

InforButton.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default InforButton;