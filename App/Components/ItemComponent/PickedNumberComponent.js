import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Utils from '../../Common/Utils';
import Styles from './Styles/PickedNumberComponentStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import BallComponent from './BallComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const PickedNumberComponent = React.memo(props => {
  const { data, index, key } = props;
  const [arrNumber, setArrNum] = useState(data);

  useEffect(() => {
    setArrNum(data)
  }, [data])

  function onRemove() {
    props.onRemove(index)
  }

  return (
    <View style={Styles.container} key={key}>
      <View style={Styles.innerView}>
        {arrNumber.map((item, index) => {
          let type = 0;
          if (index >= 5) type = 1;
          return (<BallComponent number={item} key={index} type={type} />)
        })}
      </View>
      <View style={Styles.actionView}>
        <TouchableOpacity
          onPress={() => onRemove()}
          style={Styles.btnRemove}>
          <Icon name='minus' color='#137EF4' size={Utils.hp(30)} />
        </TouchableOpacity>
      </View>
    </View>
  )
})

PickedNumberComponent.propTypes = {

}

PickedNumberComponent.defaultProps = {

}

export default PickedNumberComponent;
