import React, { useEffect, useState } from 'react';
import Styles from './Styles/HomeScreenStyles';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import Utils from '../../Common/Utils';
import apiService from '../../Services/API';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import SwippeBallComponent from '../../Components/ItemComponent/SwippeBallComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const payout = [
  ['5 + 1', '', ''],
  ['5 + 0', '1 Millions USDT', '2 Millions USDT'],
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
  const [payoutValue, setPayoutValue] = useState([{ amount: 0 }, { amount: 0 }, { amount: 0 }, { amount: 0 }, { amount: 0 }, { amount: 0 }, { amount: 0 }, { amount: 0 }, { amount: 0 }]);
  const [nextDraw, setNextDraw] = useState(0);
  const [estValue, setESTValue] = useState(0);
  const [powerX, setPowerX] = useState(0);
  const [totalPayout, setTotalPayout] = useState(0);

  useEffect(() => {
    getCurrentLot();
    getCurLotReport();
    getBalance(user.email);
  }, [])

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

  async function getCurLotReport() {
    const res = await apiService.getUserBalance('poolprize');
    const { data } = res;
    if (!data.errors) {
      const { balance } = data;
      setESTValue(balance);
    }
  }

  function renderPayout(isHeader, value1, value2, value3) {
    let header = null;
    if (isHeader) header = Styles.payoutHeader;
    return (
      <View style={Styles.payoutView} key={value1}>
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

  function onIndexChange(data) {
    const { multiplier_value, jackpot_value, total_payout } = data;
    setPowerX(multiplier_value);
    setPayoutValue(total_payout);
    setTotalPayout(jackpot_value);
  }

  return (
    <View style={Styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={Styles.headerView}>
          <Text style={Styles.headerText}>ESTIMATED JACKPOT</Text>
        </View>
        <View style={Styles.estView}>
          <View style={Styles.estValueView}>
            <Text style={Styles.esttitle}>ESTIMATED JACKPOT</Text>
            <Text style={Styles.estValue}>{Utils.usdtFormat(estValue)}</Text>
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
          <SwippeBallComponent onIndexChange={(data) => onIndexChange(data)} />
        </View>
        <View style={Styles.headerView}>
          <Text style={Styles.headerText}>PAYOUTS</Text>
        </View>
        {renderPayout(true, 'Match', 'Prize', `${powerX}X Prize`)}
        {payout.map((item, index) => {
          let value1 = item[1];
          if (index === 0) value1 = totalPayout;
          let value2 = payoutValue[8 - index].amount;
          if (index === 1) {
            return renderPayout(false, item[0], value1, Utils.usdtFormat(value2));
          }
          return renderPayout(false, item[0], Utils.usdtFormat(value1), Utils.usdtFormat(value2));
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