import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Utils from '../../Common/Utils';
import Styles from './Styles/PickedNumberComponentStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import BallComponent from './BallComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const PickedNumberComponent = React.memo(props => {
  const { index, key } = props;
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setData(props.data)
  }, [props.data])

  function onRemove() {
    props.onRemove(index)
  }

  return (
    <View style={Styles.container} key={key}>
      <View style={Styles.innerView}>
        {data.ball.map((item, index) => {
          let type = 0;
          if (index >= 5) type = 1;
          return (<BallComponent number={item} key={index} type={type} size={Utils.hp(45)}/>)
        })}
      </View>
      <View style={Styles.powerView}>
        {data.power ? <Icon name='star' color='#FFCF20' size={Utils.hp(30)} /> : null}
      </View>
      <View style={Styles.actionView}>
        <TouchableOpacity
          onPress={() => onRemove()}
          style={Styles.btnRemove}>
          <Icon name='minus' color='#137EF4' size={Utils.hp(20)} />
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
