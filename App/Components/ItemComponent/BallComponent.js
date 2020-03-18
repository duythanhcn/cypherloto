import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/BallComponentStyles';
import { View, Text, TouchableOpacity } from 'react-native';

const BallComponent = React.memo(props => {
  const { number, type, onSelect, size, textSize, isAction } = props;
  const [data, setData] = useState(props.data ? props.data : []);

  useEffect(() => {
    const func = () => {
      setData(props.data ? props.data : []);
    }
    func();
  }, [props.data])

  function onChange() {
    onSelect(number);
  }

  return (
    <View style={[Styles.container, size ? { width: size, height: size } : null]}>
      <TouchableOpacity
        disabled={!isAction}
        onPress={() => onChange()}>
        <View style={[Styles.ballView,
        type === 0 ? Styles.whiteBall : Styles.redBall, data.indexOf(number) !== -1 ? Styles.active : null,
        size ? { width: size * 0.95, height: size * 0.95 } : null]}>
          <Text style={[Styles.numberText, textSize ? { fontSize: textSize } : null, type === 0 ? Styles.whiteText : null]}>{number}</Text>
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
