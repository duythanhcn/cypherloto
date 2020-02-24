import React from 'react';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Styles from './Styles/AccountButtonStyles';
import { View, Image, TouchableOpacity } from 'react-native';
import accountIcon from '../../Images/Icons/account-icon.png';

const AccountButton = React.memo(props => {
  const { navigation } = props;
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.actionView}
        onPress={() => {
          console.log(navigation)
          navigation.dispatch(DrawerActions.openDrawer())
        }}>
        <Image style={Styles.icon} source={accountIcon} resizeMode='contain' />
      </TouchableOpacity>
    </View>);
})

AccountButton.propTypes = {
  navigation: PropTypes.object.isRequired
}


export default AccountButton;