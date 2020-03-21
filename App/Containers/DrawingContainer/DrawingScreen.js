import React, { useEffect, useState } from 'react';
import Styles from './Styles/DrawingScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import { Spinner } from 'native-base';
import moment from 'moment';
import Utils from '../../Common/Utils';
import EmptyState from '../../Components/StateComponent/EmptyState';
import BallComponent from '../../Components/ItemComponent/BallComponent';

let timerLoad = null;
const DrawingScreen = React.memo(props => {
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
      getDrawing();
    }, 500)
  }

  async function getDrawing() {
    if (!isNext) return;
    let newData = [...dataList];
    if (isRefresh) newData = [];
    const res = await apiService.getDrawing(10, page);
    const { data } = res;
    if (!data.errors) {
      const { lotteries } = data;
      if (lotteries.length > 0) {
        newData = [...newData, ...lotteries];
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

  function renderSeparator() {
    return (<View style={Styles.seperatorView}></View>)
  }

  function renderItem(item, index) {
    const { white_ball_1, white_ball_2, white_ball_3, white_ball_4,
      white_ball_5, red_ball, date_created, multiplier_value, total_jackpot, jackpot_value } = item;
    const arrBall = [white_ball_1, white_ball_2, white_ball_3, white_ball_4, white_ball_5];
    arrBall.sort(function (a, b) { return a - b });
    const date = moment(date_created).format('dddd, MMMM DD, YYYY')
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
        <Text style={Styles.payoutValue}>{Utils.formatter.format(jackpot_value / 1000000)} Millions</Text>
        <Text style={Styles.winner}>{total_jackpot === 0 ? 'NO' : total_jackpot} JACKPOT WINNER</Text>
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      <FlatList
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
        ItemSeparatorComponent={renderSeparator}
        onEndReachedThreshold={1}
      />
    </View>
  );
})

export default DrawingScreen;