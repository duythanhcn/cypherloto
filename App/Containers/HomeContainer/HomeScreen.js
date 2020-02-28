import React, { useEffect, useState } from 'react';
import Styles from './Styles/HomeScrennStyles';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import coin from '../../Images/Icons/coin.png';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import Utils from '../../Common/Utils';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const HomeScreen = React.memo(props => {
  const [balance, setBalance] = useState(0);
  const [nextDraw, setNextDraw] = useState([0, 0, 0]);
  const [estValue, setESTValue] = useState(0);
  const [winnerDate, setWinnerDate] = useState('Febulary, 21st 2020');
  const [arrWinner, setArrWinner] = useState([20, 20, 20, 20, 20, 20])

  function nextWinnerNumber() {

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
            <View style={Styles.timeView}>
              <View style={Styles.hour}>
                <Text style={Styles.hourText}>{nextDraw[0]}</Text>
              </View>
              <Text style={Styles.hourDesc}>Hours</Text>
            </View>
            <View style={Styles.timeView}>
              <View style={Styles.hour}>
                <Text style={Styles.hourText}>{nextDraw[1]}</Text>
              </View>
              <Text style={Styles.hourDesc}>Minutes</Text>
            </View>
            <View style={Styles.timeView}>
              <View style={Styles.hour}>
                <Text style={Styles.hourText}>{nextDraw[2]}</Text>
              </View>
              <Text style={Styles.hourDesc}>Seconds</Text>
            </View>
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
              onPress={() => nextWinnerNumber()}>
              <Icon name='chevron-right' color='gray' size={Utils.hp(30)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>);
})

HomeScreen.propTypes = {
}

export default HomeScreen;