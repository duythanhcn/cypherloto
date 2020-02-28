import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/LogoTitleStyles';
import { View, Text } from 'react-native';

const LogoTitle = React.memo(props => {
  const { title } = props;
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>{title}</Text>
    </View>
  )
})

LogoTitle.propTypes = {
  title: PropTypes.string.isRequired
}

LogoTitle.defaultProps = {
  title: 'Cypher Lottery'
}

export default LogoTitle;
