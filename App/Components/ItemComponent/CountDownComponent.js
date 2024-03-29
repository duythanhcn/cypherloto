import React, { useState, useEffect } from 'react';
import Styles from './Styles/CountDownComponentStyles';
import { View, Text } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

let timer = null;
const CountDownComponent = React.memo(props => {
  const { data, lot, setLot } = props;
  const [time, setTime] = useState(moment().format('YYYY-MM-DDTHH:mm:ss'));
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');

  useEffect(() => {
    setTime(data)
  }, [data])

  useEffect(() => {
    const func = () => {
      clearInterval(timer);
      timer = setInterval(() => {
        countDown();
      }, 1000)
    }
    func();
    return () => {
      clearInterval(timer);
    }
  })

  function countDown() {
    const diff = moment(time).diff(moment.now(), 'seconds');
    if (diff < 0) return
    const hour = (diff - diff % 3600) / 3600;
    let minute = diff - (hour * 3600);
    minute = (minute - minute % 60) / 60;
    const second = diff - (hour * 3600) - (minute * 60);
    if (hour <= 0 && minute <= 0 && second <= 0) {
      setLot(true)
    } else if (lot.isLot) {
      setLot(false)
    }
    setHour(hour > 9 ? hour : `0${hour}`)
    setMinute(minute > 9 ? minute : `0${minute}`)
    setSecond(second > 9 ? second : `0${second}`)
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.timeItem}>
        <View style={Styles.timeView}>
          <Text style={Styles.timeDigit}>{hour}</Text>
        </View>
        <Text style={Styles.timeUnit}>Hours</Text>
      </View>
      <View style={Styles.timeItem}>
        <View style={Styles.timeView}>
          <Text style={Styles.timeDigit}>{minute}</Text>
        </View>
        <Text style={Styles.timeUnit}>Minutes</Text>
      </View>
      <View style={Styles.timeItem}>
        <View style={Styles.timeView}>
          <Text style={Styles.timeDigit}>{second}</Text>
        </View>
        <Text style={Styles.timeUnit}>Seconds</Text>
      </View>
    </View>
  )
});

const mapStateToProps = state => {
  return { lot: state.lot }
}

const mapDispatchToProps = dispatch => {
  return { setLot: (data) => dispatch({ data, type: 'SET_LOT' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountDownComponent);
