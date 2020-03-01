import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/BallComponentStyles';
import { View, Text, TouchableOpacity } from 'react-native';

const BallComponent = React.memo(props => {
  const { number, type, onSelect } = props;
  const [status, setStatus] = useState(false);
  const [total, setTotal] = useState(props.total);

  useEffect(() => {
    setTotal(props.props);
  }, [props.total])

  useEffect(() => {
    onSelect(number, status);
  }, [status])

  function onChange() {
    console.log(type, total)
    if (type === 0 && total < 4) {
      setStatus(!status)
    }
  }

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => onChange()}>
        <View style={[Styles.ballView, type === 0 ? Styles.whiteBall : Styles.redBall, status ? Styles.active : null]}>
          <Text style={Styles.numberText}>{number}</Text>
        </View>
      </TouchableOpacity>
    </View >
  )
})

BallComponent.propTypes = {
  number: PropTypes.number.isRequired,
  type: PropTypes.number
}

BallComponent.defaultProps = {
  onSelect: () => { }
}

export default BallComponent;
