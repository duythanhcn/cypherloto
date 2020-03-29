import React, { useState, useEffect } from 'react';
import Styles from './Styles/SwippeBallComponentStyles';
import BallComponent from '..//ItemComponent/BallComponent';
import Utils from '../../Common/Utils';
import Swiper from 'react-native-swiper';
import withWinnerLot from '../../HOC/withWinnerLot';
import moment from 'moment';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const SwippeBallComponent = React.memo(props => {
  const { winnerLot, onIndexChange } = props;
  const [dataWinner] = useState(winnerLot);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const data = dataWinner[0];
    onIndexChange(data);
  }, [])

  function _onChangeIndex(index) {
    const data = dataWinner[index];
    setIndex(index);
    onIndexChange(data);
  }

  function renderWinner(data, index) {
    const { date_created, white_ball_1, white_ball_2, white_ball_3, white_ball_4,
      white_ball_5, red_ball, multiplier_value, total_jackpot, jackpot_value } = data;
    const date = moment(date_created).format('dddd, MMMM DD, YYYY');
    const winnerLot = [white_ball_1, white_ball_2, white_ball_3, white_ball_4, white_ball_5, red_ball];
    winnerLot.sort(function (a, b) { return a - b });
    return (
      <View style={Styles.winnerBody} key={index}>
        <View style={Styles.winnerHeader}>
          <Text style={Styles.winnerDate}>{date.toUpperCase()}</Text>
        </View>
        <View style={Styles.numberView}>
          <BallComponent number={winnerLot[0]} type={0} size={Utils.hp(45)} textSize={Utils.hp(16)} />
          <BallComponent number={winnerLot[1]} type={0} size={Utils.hp(45)} textSize={Utils.hp(16)} />
          <BallComponent number={winnerLot[2]} type={0} size={Utils.hp(45)} textSize={Utils.hp(16)} />
          <BallComponent number={winnerLot[3]} type={0} size={Utils.hp(45)} textSize={Utils.hp(16)} />
          <BallComponent number={winnerLot[4]} type={0} size={Utils.hp(45)} textSize={Utils.hp(16)} />
          <BallComponent number={winnerLot[5]} type={1} size={Utils.hp(45)} textSize={Utils.hp(16)} />
        </View>
        <Text style={Styles.powerText}>POWER PLAY: {multiplier_value}</Text>
        <Text style={Styles.payoutValue}>{Utils.usdtFormat(jackpot_value)}</Text>
        <Text style={Styles.winner}>{total_jackpot === 0 ? 'NO' : total_jackpot} JACKPOT WINNER</Text>
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.prevView}>
        {index > 0 ? <Icon name='chevron-left' color='gray' size={Utils.hp(20)} /> : null}
      </View>
      <Swiper
        index={0}
        autoplay={false}
        showsPagination={false}
        loop={false}
        showsButtons={false}
        onIndexChanged={(index) => _onChangeIndex(index)}>
        {dataWinner.map((data, index) => renderWinner(data, index))}
      </Swiper>
      <View style={Styles.nextView}>
        {index < 9 ? <Icon name='chevron-right' color='gray' size={Utils.hp(20)} /> : null}
      </View>
    </View>)
})

export default withWinnerLot(SwippeBallComponent);