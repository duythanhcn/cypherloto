import React, { useState, useEffect } from 'react';
import Styles from './Styles/CountDownComponentStyles';
import { View, Text } from 'react-native';
import moment from 'moment'

let timer = null;
const CountDownComponent = React.memo(props => {
  const { data } = props;
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
    const hour = (diff - diff % 3600) / 3600;
    let minute = diff - (hour * 3600);
    minute = (minute - minute % 60) / 60;
    const second = diff - (hour * 3600) - (minute * 60);
    setHour(hour)
    setMinute(minute)
    setSecond(second)
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
})

export default CountDownComponent;
