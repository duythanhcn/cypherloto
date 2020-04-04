import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/SearchButtonStyles';
import { View, TouchableOpacity } from 'react-native';
import Utils from '../../Common/Utils';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const SearchButton = React.memo(props => {
  const { navigation } = props;
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.actionView}
        onPress={() => navigation.navigate('SearchInput')}>
        <Icon name='search' color='#147EFB' size={Utils.hp(25)} />
      </TouchableOpacity>
    </View>);
})

SearchButton.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default SearchButton;