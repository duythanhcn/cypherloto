import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/BallComponentStyles';
import { View, Text } from 'react-native';

const BallComponent = React.memo(props => {
  const { number, type } = props;
  return (
    <View style={Styles.container}>
      <View style={[Styles.ballView, type === 0 ? Styles.whiteBall : Styles.redBall]}>
        <Text style={Styles.numberText}>{number}</Text>
      </View>
    </View>
  )
})

BallComponent.propTypes = {
  number: PropTypes.number.isRequired,
  type: PropTypes.number
}

BallComponent.defaultProps = {
  number: 0
}

export default BallComponent;
