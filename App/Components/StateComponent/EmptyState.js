import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/EmptyStateStyles';
import { View, Text } from 'react-native';

const EmptyState = React.memo(props => {
  const { } = props;
  return (
    <View style={Styles.container}>
      <Text style={Styles.messageText}>No Data</Text>
    </View>
  )
})

EmptyState.propTypes = {

}

EmptyState.defaultProps = {

}

export default EmptyState;
