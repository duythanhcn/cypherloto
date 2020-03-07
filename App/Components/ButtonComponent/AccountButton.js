import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/AccountButtonStyles';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Utils from '../../Common/Utils';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const AccountButton = React.memo(props => {
  const { navigation } = props;
  return (
    <TouchableOpacity
      style={Styles.actionView}
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
      <Icon name={'user-circle'} color='gray' size={Utils.hp(30)} />
    </TouchableOpacity>
  );
})

AccountButton.propTypes = {
  navigation: PropTypes.object.isRequired
}


export default AccountButton;