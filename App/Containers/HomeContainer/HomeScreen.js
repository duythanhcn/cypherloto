import React, { useEffect, useState } from 'react';
import Styles from './Styles/HomeScrennStyles';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import coin from '../../Images/Icons/coin.png';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import Utils from '../../Common/Utils';
import apiService from '../../Services/API';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const HomeScreen = React.memo(props => {
  const { user, setUser } = props;
  const [balance, setBalance] = useState(0);
  const [nextDraw, setNextDraw] = useState(0);
  const [estValue, setESTValue] = useState(0);
  const [winnerDate, setWinnerDate] = useState('');
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
    const { data, status, statusText } = res;
    if (status === 200) {
      const { address, balance } = data;
      setUser({ address, balance })
      setBalance(balance);
    }
  }

  async function getCurrentLot() {
    const res = await apiService.getCurrentLot();
    const { data, status, statusText } = res;
    if (status === 200) {
      const { next_lottery_date } = data;
      const diff = moment(next_lottery_date).diff(moment.now());
      setNextDraw(diff / 1000);
    }
  }

  async function nextWinnerNumber() {
    const res = await apiService.getWinnerLot(10);
    const { data, status, statusText } = res;
    if (status === 200) {
      setDataWinner(data);
      setIndex(0);
    }
  }

  async function getCurLotReport() {
    const res = await apiService.getCurLotReport();
    const { data, status, statusText } = res;
    if (status === 200) {
      const { total_amount } = data.results;
      setESTValue(total_amount);
    }
  }

  function setWinnerBall(index) {
    const data = dataWinner[index];
    if (data) {
      const { date_created, white_ball_1, white_ball_2, white_ball_3, white_ball_4, white_ball_5, red_ball } = data;
      setWinnerDate(moment(date_created).format('MMMM-Do-YYYY'));
      const winnerLot = [white_ball_1, white_ball_2, white_ball_3, white_ball_4, white_ball_5, red_ball];
      setArrWinner(winnerLot);
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.headerView}>
        <Text style={Styles.headerText}>YOUR BALANCE</Text>
      </View>
      <View style={Styles.balanceView}>
        <View style={Styles.iconView}>
          <Image style={Styles.img} source={coin} resizeMode='contain' />
        </View>
        <View style={Styles.coinView}>
          <Text style={Styles.cointText}>{balance} USDT</Text>
        </View>
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
            <TouchableOpacity
              disabled={index <= 0 ? true : false}
              onPress={() => index > 0 ? setIndex(index - 1) : null}>
              <Icon name='chevron-left' color='gray' size={Utils.hp(30)} />
            </TouchableOpacity>
          </View>
          <View style={Styles.numberView}>
            <BallComponent number={arrWinner[0]} type={0} />
            <BallComponent number={arrWinner[1]} type={0} />
            <BallComponent number={arrWinner[2]} type={0} />
            <BallComponent number={arrWinner[3]} type={0} />
            <BallComponent number={arrWinner[4]} type={0} />
            <BallComponent number={arrWinner[5]} type={1} />
          </View>
          <View style={Styles.nextNumber}>
            <TouchableOpacity
              disabled={index >= 9 ? true : false}
              onPress={() => index < 9 ? setIndex(index + 1) : null}>
              <Icon name='chevron-right' color='gray' size={Utils.hp(30)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>);
})

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);