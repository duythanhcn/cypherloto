import React, { useEffect, useState } from 'react';
import Styles from './Styles/DrawingScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import { Spinner } from 'native-base';
import moment from 'moment-timezone';
import Utils from '../../Common/Utils';
import EmptyState from '../../Components/StateComponent/EmptyState';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import { connect } from 'react-redux';

let timerLoad = null;
let timerRefresh = null;
const DrawingScreen = React.memo(props => {
  const { lot } = props;
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
    if (lot.isLot) {
      onRefresh()
    }
  }, [lot])

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
    timerLoad = setTimeout(() => {
      setLoad(true);
      getDrawing();
    }, 500)
  }

  async function getDrawing() {
    let newData = [...dataList];
    let _page = page;
    if (isRefresh) {
      newData = [];
      _page = 0;
    }
    try {
      const res = await apiService.getDrawing(10, _page);
      const { data } = res;
      if (!data.errors) {
        const { lotteries } = data;
        if (lotteries.length > 0) {
          newData = [...newData, ...lotteries];
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

  function renderSeparator() {
    return (<View style={Styles.seperatorView}></View>)
  }

  function renderItem(item, index) {
    const { white_ball_1, white_ball_2, white_ball_3, white_ball_4,
      white_ball_5, red_ball, date_created, multiplier_value, total_jackpot, jackpot_value } = item;
    const arrBall = [white_ball_1, white_ball_2, white_ball_3, white_ball_4, white_ball_5];
    arrBall.sort(function (a, b) { return a - b });
    const date = moment(date_created).tz('America/New_York').format('dddd, MMMM DD, YYYY')
    return (
      <View style={Styles.containerItem} key={index}>
        <Text style={Styles.timeText}>{date.toUpperCase()}</Text>
        <View style={Styles.ballView}>
          <BallComponent number={arrBall[0]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={arrBall[1]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={arrBall[2]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={arrBall[3]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={arrBall[4]} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={red_ball} size={Utils.hp(45)} type={1} textSize={Utils.hp(16)} />
        </View>
        <Text style={Styles.powerText}>POWER PLAY: {multiplier_value}</Text>
        <Text style={Styles.payoutValue}>{Utils.usdtFormat(jackpot_value)}</Text>
        <Text style={Styles.winner}>{total_jackpot === 0 ? 'NO' : total_jackpot} JACKPOT WINNER</Text>
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshing={isRefresh}
        style={Styles.listView}
        data={dataList}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => renderItem(item, index)}
        onEndReached={() => isNext ? loadNext() : null}
        onRefresh={() => onRefresh()}
        ListEmptyComponent={isFirstLoad ? null : <EmptyState />}
        ListFooterComponent={isLoad && isNext ? Spinner : null}
        ItemSeparatorComponent={renderSeparator}
        onEndReachedThreshold={1}
      />
    </View>
  );
});

const mapStateToProps = state => {
  return { lot: state.lot }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingScreen);