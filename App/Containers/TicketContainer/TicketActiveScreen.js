import React, { useEffect, useState } from 'react';
import Styles from './Styles/TicketActiveScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import Utils from '../../Common/Utils';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import moment from 'moment';
import EmptyState from '../../Components/StateComponent/EmptyState';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

let timerLoad = null;
const TicketActiveScreen = React.memo(props => {
  const { user } = props;
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
      getUserActiveTicket();
    }, 500)
  }

  async function getUserActiveTicket() {
    if (!isNext) return;
    let newData = [...dataList];
    if (isRefresh) newData = [];
    const res = await apiService.getUserActiveTicket(user.email, 10, page);
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
    const { white1_ball, white2_ball, white3_ball, white4_ball,
      white5_ball, red_ball, power, created_at } = item;
    return (
      <View style={Styles.containerItem} key={index}>
        <View style={Styles.rightView}>
          <Text style={Styles.itemText}>{moment(created_at).format('MM/DD/YY')}</Text>
        </View>
        <View style={Styles.secondView}>
          <BallComponent number={white1_ball} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={white2_ball} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={white3_ball} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={white4_ball} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
          <BallComponent number={white5_ball} size={Utils.hp(45)} type={0} textSize={Utils.hp(16)} />
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
        ItemSeparatorComponent={() => <View style={Styles.seperatorView}></View>}
      />
    </View>
  );
})

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketActiveScreen);