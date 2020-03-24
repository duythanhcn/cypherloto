import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/BallComponentStyles';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import redBall from '../../Images/balls/redBall.png';
import redBallActive from '../../Images/balls/redBallActive.png';
import redBallTick from '../../Images/balls/redBallTick.png';
import whiteBall from '../../Images/balls/whiteBall.png';
import whiteBallActive from '../../Images/balls/whiteBallActive.png';
import whiteBallTick from '../../Images/balls/whiteBallTick.png';

const BallComponent = React.memo(props => {
  const { number, type, onSelect, size, textSize, isAction, isActive } = props;
  const [data, setData] = useState(props.data ? props.data : []);
  const [ball, setBall] = useState(_setBall());

  function _setBall() {
    if (type === 0) {
      if (data.indexOf(number) !== -1) {
        return whiteBallActive;
      }
      if (isActive) {
        return whiteBallTick;
      }
      return whiteBall;
    } else {
      if (data.indexOf(number) !== -1) {
        return redBallActive;
      }
      if (isActive) {
        return redBallTick;
      }
      return redBall;
    }
  }

  useEffect(() => {
    setBall(_setBall());
  }, [data])

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
        <View style={[Styles.ballView, size ? { width: size * 0.8, height: size * 0.8 } : null]}>
          <Image source={ball} style={Styles.ballItem} resizeMode='contain' />
          <Text style={[Styles.numberText, textSize ? { fontSize: textSize } : null, type === 0 ? Styles.whiteText : null]}>{number}</Text>
        </View>
      </TouchableOpacity>
    </View>
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
