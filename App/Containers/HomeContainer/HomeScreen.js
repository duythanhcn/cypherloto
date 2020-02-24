import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const HomeScreen = React.memo(props => {
  return (<View>
    <Text>Home</Text>
  </View>);
})

HomeScreen.propTypes = {
}

export default HomeScreen;