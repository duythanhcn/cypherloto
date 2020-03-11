import React, { useEffect, useState } from 'react';
import Styles from './Styles/HomeWithoutAccountScreenStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import Utils from '../../Common/Utils';
import apiService from '../../Services/API';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const HomeWithoutAccountScreen = React.memo(props => {
  const { navigation } = props;
  const [nextDraw, setNextDraw] = useState(0);
  const [estValue, setESTValue] = useState(0);
  const [winnerDate, setWinnerDate] = useState('');
  const [arrWinner, setArrWinner] = useState([0, 0, 0, 0, 0, 0]);
  const [dataWinner, setDataWinner] = useState([]);
  const [index, setIndex] = useState(-1);
  const [powerX, setPowerX] = useState(0);

  useEffect(() => {
    getCurrentLot();
    nextWinnerNumber();
    getCurLotReport();
  }, [])

  useEffect(() => {
    setWinnerBall(index);
  }, [index])

  async function getCurrentLot() {
    const res = await apiService.getCurrentLot();
    const { data } = res;
    if (!data.errors) {
      const { next_lottery_date } = data;
      const diff = moment(next_lottery_date).diff(moment.now());
      setNextDraw(diff / 1000);
    }
  }

  async function nextWinnerNumber() {
    const res = await apiService.getWinnerLot(10);
    const { data } = res;
    if (!data.errors) {
      setDataWinner(data);
      setIndex(0);
    }
  }

  async function getCurLotReport() {
    const res = await apiService.getUserBalance('poolprize');
    const { data } = res;
    if (!data.errors) {
      const { balance } = data;
      setESTValue(balance);
    }
  }

  function setWinnerBall(index) {
    const data = dataWinner[index];
    if (data) {
      const { date_created, white_ball_1, white_ball_2, white_ball_3, white_ball_4, white_ball_5, red_ball, multiplier_value } = data;
      setWinnerDate(moment(date_created).format('MMMM-DD-YYYY'));
      const winnerLot = [white_ball_1, white_ball_2, white_ball_3, white_ball_4, white_ball_5, red_ball];
      setArrWinner(winnerLot.sort(function (a, b) { return a - b }));
      setPowerX(multiplier_value);
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>TRY YOUR GAME</Text>
      </View>
      <View style={Styles.balanceView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={Styles.buttonView}>
          <Text style={Styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>ESTIMATED JACKPOT</Text>
      </View>
      <View style={Styles.estView}>
        <View style={Styles.estValueView}>
          <Text style={Styles.esttitle}>ESTIMATED JACKPOT</Text>
          <Text style={Styles.estValue}>{estValue} USDT</Text>
        </View>
        <View style={Styles.nextDrawView}>
          <Text style={Styles.esttitle}>NEXT DRAWING</Text>
          <View style={Styles.timeDrawView}>
            <CountDown
              until={nextDraw}
              size={30}
              onFinish={() => { }}
              style={Styles.timeView}
              digitStyle={Styles.hour}
              digitTxtStyle={Styles.hourText}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{ h: 'Hours', m: 'Minutes', s: 'Seconds' }}
              timeLabelStyle={Styles.hourDesc} />
          </View>
        </View>
      </View>

      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>WINNER NUMBERS</Text>
      </View>
      <View style={Styles.winnerView}>
        <View style={Styles.winnerHeader}>
          <Text style={Styles.winnerDate}>{winnerDate}</Text>
        </View>
        <View style={Styles.winnerBody}>
          <View style={Styles.prevNumber}>
            {index > 0 ?
              <TouchableOpacity
                disabled={index <= 0 ? true : false}
                onPress={() => index > 0 ? setIndex(index - 1) : null}>
                <Icon name='chevron-left' color='gray' size={Utils.hp(25)} />
              </TouchableOpacity>
              : null}
          </View>
          <View style={Styles.numberView}>
            <BallComponent number={arrWinner[0]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
            <BallComponent number={arrWinner[1]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
            <BallComponent number={arrWinner[2]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
            <BallComponent number={arrWinner[3]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
            <BallComponent number={arrWinner[4]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
            <BallComponent number={arrWinner[5]} type={1} size={Utils.hp(40)} textSize={Utils.hp(16)} />
          </View>
          <View style={Styles.nextNumber}>
            {index < 9 ?
              <TouchableOpacity
                disabled={index >= 9 ? true : false}
                onPress={() => index < 9 ? setIndex(index + 1) : null}>
                <Icon name='chevron-right' color='gray' size={Utils.hp(25)} />
              </TouchableOpacity>
              : null}
          </View>
        </View>
        {powerX > 0 ? <Text style={Styles.powerText}>Power Play X{powerX}</Text> : null}
      </View>
    </View>);
})

export default HomeWithoutAccountScreen;