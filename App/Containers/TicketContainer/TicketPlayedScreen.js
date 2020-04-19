import React, { useEffect, useState } from 'react';
import Styles from './Styles/TicketPlayedScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import Utils from '../../Common/Utils';
import { Spinner } from 'native-base';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import EmptyState from '../../Components/StateComponent/EmptyState';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

let timerLoad = null;
const TicketPlayedScreen = React.memo(props => {
  const { user, lot } = props;
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0);
  const [isNext, setNext] = useState(true);
  const [isRefresh, setRefresh] = useState(false);
  const [isFirstLoad, setFirstLoad] = useState(true);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    if (lot.isLot) {
      onRefresh()
    }
  }, [lot])

  useEffect(() => {
    getData();
  }, [page])

  useEffect(() => {
    if (isRefresh) {
      setPage(0)
    }
  }, [isRefresh])

  async function getData() {
    if (isLoad) return;
    clearTimeout(timerLoad);
    timerLoad = setTimeout(() => {
      setLoad(true);
      getUserPlayedTicket();
    }, 500)
  }

  async function getUserPlayedTicket() {
    if (!isNext) return;
    let newData = [...dataList];
    if (isRefresh) newData = [];
    const res = await apiService.getUserPlayedTicket(user.email, 10, page);
    const { data } = res;
    if (!data.errors) {
      const { tickets } = data;
      if (tickets.length > 0) {
        newData = [...newData, ...tickets];
      } else {
        setNext(false);
      }
    }
    setDataList(newData);
    setRefresh(false);
    setFirstLoad(false);
    setLoad(false);
  }

  function onRefresh() {
    setRefresh(true);
    setNext(true);
  }

  function renderItem(item, index) {
    const { white1_ball, white2_ball, white3_ball, created_at, power,
      white4_ball, white5_ball, red_ball, won_amount,
      white1_ball_checked, white2_ball_checked, white3_ball_checked,
      white4_ball_checked, white5_ball_checked, red_ball_checked } = item;
    const arrBall = [white1_ball, white2_ball, white3_ball, white4_ball, white5_ball];
    arrBall.sort(function (a, b) { return a - b });
    const date = moment(created_at).tz('America/New_York').format('MM/DD/YYYY');
    const numRedBall = red_ball_checked ? 1 : 0;
    let numWhiteBall = 0;
    numWhiteBall += white1_ball_checked ? 1 : 0
    numWhiteBall += white2_ball_checked ? 1 : 0
    numWhiteBall += white3_ball_checked ? 1 : 0
    numWhiteBall += white4_ball_checked ? 1 : 0
    numWhiteBall += white5_ball_checked ? 1 : 0
    return (
      <View style={Styles.containerItem} key={index}>
        <View style={Styles.firstView}>
          <Text style={Styles.itemText}>Matched {numWhiteBall} + {numRedBall} = {won_amount}$</Text>
          <Text style={Styles.itemText}>{date}</Text>
        </View>
        <View style={Styles.secondView}>
          <BallComponent number={arrBall[0]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} isActive={white1_ball_checked} />
          <BallComponent number={arrBall[1]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} isActive={white2_ball_checked} />
          <BallComponent number={arrBall[2]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} isActive={white3_ball_checked} />
          <BallComponent number={arrBall[3]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} isActive={white4_ball_checked} />
          <BallComponent number={arrBall[4]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} isActive={white5_ball_checked} />
          <BallComponent number={red_ball} size={Utils.hp(45)} type={1} textSize={Utils.hp(16)} isActive={red_ball_checked} />
        </View>
        <View style={Styles.thirdView}>
          <Text style={Styles.powerText}>POWER PLAY: {power ? 'YES' : 'NO'}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshing={isRefresh}
        style={Styles.listView}
        data={dataList}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => renderItem(item, index)}
        onEndReached={() => isNext ? setPage(page + 1) : null}
        onRefresh={() => onRefresh()}
        ListEmptyComponent={isFirstLoad ? null : <EmptyState />}
        ListFooterComponent={isLoad ? Spinner : null}
        ItemSeparatorComponent={() => (<View style={Styles.seperatorView}></View>)}
      />
    </View>
  );
})

const mapStateToProps = state => {
  return { user: state.user, lot: state.lot }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketPlayedScreen);