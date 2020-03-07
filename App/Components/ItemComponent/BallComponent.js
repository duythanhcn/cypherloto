import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/BallComponentStyles';
import { View, Text, TouchableOpacity } from 'react-native';

const BallComponent = React.memo(props => {
  const { number, type, onSelect, data, size, textSize } = props;
  const [status, setStatus] = useState(false);
  const [total, setTotal] = useState(props.total);

  useEffect(() => {
    const func = () => {
      setTotal(props.total);
    }
    func();
  }, [props.total])

  useEffect(() => {
    const func = () => {
      if (!data) return;
      const index = data.indexOf(number);
      if (index !== -1 && !status) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    }
    func();
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
    <View style={[Styles.container, size ? { width: size, height: size } : null]}>
      <TouchableOpacity
        disabled={onSelect ? true : false}
        onPress={() => onChange()}>
        <View style={[Styles.ballView,
        type === 0 ? Styles.whiteBall : Styles.redBall, status ? Styles.active : null,
        size ? { width: size * 0.95, height: size * 0.95 } : null]}>
          <Text style={[Styles.numberText, textSize ? { fontSize: textSize } : null]}>{number}</Text>
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
