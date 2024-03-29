import React, { useEffect, useState } from 'react';
import Styles from './Styles/TicketActiveScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import Utils from '../../Common/Utils';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import moment from 'moment-timezone';
import EmptyState from '../../Components/StateComponent/EmptyState';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

let timerLoad = null;
let timerRefresh = null;
const TicketActiveScreen = React.memo(props => {
  const { user, setBuy, buy } = props;
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0);
  const [isNext, setNext] = useState(true);
  const [isRefresh, setRefresh] = useState(false);
  const [isFirstLoad, setFirstLoad] = useState(true);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    getData();
    return () => {
      clearTimeout(timerLoad);
      clearTimeout(timerRefresh);
    }
  }, [])

  useEffect(() => {
    if (buy.isBuy) {
      onRefresh();
      setBuy({ isBuy: false });
    }
  }, [buy])

  useEffect(() => {
    if (isRefresh) {
      getData();
    }
    timerRefresh = setTimeout(() => {
      setRefresh(false);
    }, 10000)
  }, [isRefresh])

  async function getData() {
    if (isLoad && !isRefresh) return;
    clearTimeout(timerLoad);
    setLoad(true);
    timerLoad = setTimeout(() => {
      getUserActiveTicket();
    }, 500)
  }

  async function getUserActiveTicket() {
    let newData = [...dataList];
    let _page = page;
    if (isRefresh) {
      newData = [];
      _page = 0;
    }
    try {
      const res = await apiService.getUserActiveTicket(user.email, 10, _page);
      const { data } = res;
      if (!data.errors) {
        const { tickets } = data;
        if (tickets.length > 0) {
          newData = [...newData, ...tickets];
          setNext(true);
        } else {
          setNext(false);
        }
      }
    } catch (err) { }
    setDataList(newData);
    setRefresh(false);
    setFirstLoad(false);
    setLoad(false);
    setPage(_page + 1);
  }

  function onRefresh() {
    setRefresh(true);
  }

  function loadNext() {
    if (isNext && !isRefresh) {
      getData()
    }
  }

  function renderItem(item, index) {
    const { white1_ball, white2_ball, white3_ball, white4_ball,
      white5_ball, red_ball, power, created_at } = item;
    const arrBall = [white1_ball, white2_ball, white3_ball, white4_ball, white5_ball];
    arrBall.sort(function (a, b) { return a - b });
    return (
      <View style={Styles.containerItem} key={index}>
        <View style={Styles.rightView}>
          <Text style={Styles.itemText}>{moment(created_at).tz('America/New_York').format('MM.DD.YYYY')}</Text>
        </View>
        <View style={Styles.secondView}>
          <BallComponent number={arrBall[0]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={arrBall[1]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={arrBall[2]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={arrBall[3]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={arrBall[4]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={red_ball} size={Utils.hp(45)} type={1} textSize={Utils.hp(16)} />
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
        onEndReached={() => isNext && !isLoad ? loadNext() : null}
        onRefresh={() => onRefresh()}
        ListEmptyComponent={isFirstLoad ? null : <EmptyState />}
        ListFooterComponent={isLoad && isNext ? Spinner : null}
        ItemSeparatorComponent={() => <View style={Styles.seperatorView}></View>}
      />
    </View>
  );
})

const mapStateToProps = state => {
  return { user: state.user, buy: state.buy }
}

const mapDispatchToProps = dispatch => {
  return {
    setBuy: (data) => dispatch({ data, type: 'SET_BUY' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketActiveScreen);