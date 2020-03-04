import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/BallComponentStyles';
import { View, Text, TouchableOpacity } from 'react-native';

const BallComponent = React.memo(props => {
  const { number, type, onSelect, data } = props;
  const [status, setStatus] = useState(false);
  const [total, setTotal] = useState(props.total);

  useEffect(() => {
    setTotal(props.total);
  }, [props.total])

  useEffect(() => {
    if (!data) return;
    const index = data.indexOf(number);
    if (index !== -1 && !status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [data])

  useEffect(() => {
    onSelect(number, status);
  }, [status])

  function onChange() {
    if (type === 0) {
      if (total < 5) {
        setStatus(!status);
      } else {
        setStatus(false);
      }
    } else {
      if (total < 1) {
        setStatus(!status);
      } else {
        setStatus(false);
      }
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
  number: PropTypes.number,
  type: PropTypes.number
}

BallComponent.defaultProps = {
  onSelect: () => { }
}

export default BallComponent;
