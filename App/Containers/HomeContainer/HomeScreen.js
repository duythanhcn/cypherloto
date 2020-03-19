import React, { useEffect, useState } from 'react';
import Styles from './Styles/HomeScreenStyles';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import coin from '../../Images/Icons/coin.png';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import Utils from '../../Common/Utils';
import apiService from '../../Services/API';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const payout = [
  ['5 + 1', '', ''],
  ['5 + 0', '1 Millions', '2 Millions'],
  ['4 + 1', '50000', '200,000'],
  ['4 + 0', '100', '400'],
  ['3 + 1', '100', '400'],
  ['3 + 0', '7', '28'],
  ['2 + 1', '7', '28'],
  ['1 + 1', '7', '28'],
  ['0 + 1', '7', '28']
];

const HomeScreen = React.memo(props => {
  const { user, setUser } = props;
  const [payoutValue, setPayoutValue] = useState(0);
  const [winner, setWinner] = useState(0);
  const [nextDraw, setNextDraw] = useState(0);
  const [estValue, setESTValue] = useState(0);
  const [winnerDate, setWinnerDate] = useState('');
  const [powerX, setPowerX] = useState(0);
  const [arrWinner, setArrWinner] = useState([0, 0, 0, 0, 0, 0]);
  const [dataWinner, setDataWinner] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    getCurrentLot();
    nextWinnerNumber();
    getCurLotReport();
  }, [])

  useEffect(() => {
    getBalance(user.email);
  }, [user])

  useEffect(() => {
    setWinnerBall(index);
  }, [index])

  async function getBalance(email) {
    const res = await apiService.getUserBalance(email);
    const { data } = res;
    if (!data.errors) {
      const { address, balance } = data;
      setUser({ address, balance });
    }
  }

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
      setESTValue(balance / 1000000);
    }
  }

  function setWinnerBall(index) {
    const data = dataWinner[index];
    if (data) {
      const { date_created, white_ball_1, white_ball_2, white_ball_3, white_ball_4,
        white_ball_5, red_ball, multiplier_value, total_jackpot, jackpot_value } = data;
      setWinnerDate(moment(date_created).format('dddd, MMMM DD, YYYY'));
      const winnerLot = [white_ball_1, white_ball_2, white_ball_3, white_ball_4, white_ball_5, red_ball];
      setArrWinner(winnerLot.sort(function (a, b) { return a - b }));
      setPowerX(multiplier_value);
      setPayoutValue(jackpot_value / 1000000);
      setWinner(total_jackpot);
    }
  }

  function renderPayout(isHeader, value1, value2, value3) {
    let header = null;
    if (isHeader) header = Styles.payoutHeader;
    return (
      <View style={Styles.payoutView}>
        <View style={Styles.view1}>
          <Text style={[Styles.payoutText, header]}>{value1}</Text>
        </View>
        <View style={Styles.view2}>
          <Text style={[Styles.payoutText, header]}>{value2}</Text>
        </View>
        <View style={Styles.view3}>
          <Text style={[Styles.payoutText, header]}>{value3}</Text>
        </View>
      </View>)
  }

  return (
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.headerView}>
          <Text style={Styles.headerText}>ESTIMATED JACKPOT</Text>
        </View>
        <View style={Styles.estView}>
          <View style={Styles.estValueView}>
            <Text style={Styles.esttitle}>ESTIMATED JACKPOT</Text>
            <Text style={Styles.estValue}>{Utils.formatter.format(estValue)} Millions</Text>
          </View>
          <View style={Styles.nextDrawView}>
            <Text style={Styles.esttitle}>NEXT DRAWING</Text>
            <View style={Styles.timeDrawView}>
              <CountDown
                until={nextDraw}
                size={Utils.hp(20)}
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
          <View style={Styles.prevNumber}>
            {index > 0 ?
              <TouchableOpacity
                disabled={index <= 0 ? true : false}
                onPress={() => index > 0 ? setIndex(index - 1) : null}>
                <Icon name='chevron-left' color='gray' size={Utils.hp(20)} />
              </TouchableOpacity>
              : null}
          </View>
          <View style={Styles.winnerBody}>
            <View style={Styles.winnerHeader}>
              <Text style={Styles.winnerDate}>{winnerDate.toUpperCase()}</Text>
            </View>
            <View style={Styles.numberView}>
              <BallComponent number={arrWinner[0]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
              <BallComponent number={arrWinner[1]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
              <BallComponent number={arrWinner[2]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
              <BallComponent number={arrWinner[3]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
              <BallComponent number={arrWinner[4]} type={0} size={Utils.hp(40)} textSize={Utils.hp(16)} />
              <BallComponent number={arrWinner[5]} type={1} size={Utils.hp(40)} textSize={Utils.hp(16)} />
            </View>
            <Text style={Styles.powerText}>POWER PLAY: {powerX}</Text>
            <Text style={Styles.payoutValue}>{Utils.formatter.format(payoutValue)} Millions</Text>
            <Text style={Styles.winner}>{winner === 0 ? 'NO' : winner} JACKPOT WINNER</Text>
          </View>

          <View style={Styles.nextNumber}>
            {index < 9 ?
              <TouchableOpacity
                disabled={index >= 9 ? true : false}
                onPress={() => index < 9 ? setIndex(index + 1) : null}>
                <Icon name='chevron-right' color='gray' size={Utils.hp(20)} />
              </TouchableOpacity>
              : null}
          </View>
        </View>
        <View style={Styles.headerView}>
          <Text style={Styles.headerText}>PAYOUTS</Text>
        </View>
        {renderPayout(true, 'Match', 'Prize', `${powerX}X Prize`)}
        {payout.map((item, index) => {
          let value1 = item[1];
          let value2 = item[2];
          if (index > 1) value2 = value1 * powerX;
          if (index === 1) {
            return renderPayout(false, item[0], value1, value2);
          }
          return renderPayout(false, item[0],
            index === 0 ? Utils.formatter.format(payoutValue) + ' Millions' : Utils.formatter.format(value1),
            index === 0 ? Utils.formatter.format(payoutValue) + ' Millions' : Utils.formatter.format(value2));
        })}
      </ScrollView>
    </View>);
})

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);