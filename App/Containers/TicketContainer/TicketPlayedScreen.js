import React, { useEffect, useState } from 'react';
import Styles from './Styles/TicketPlayedScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import moment from 'moment';
import Utils from '../../Common/Utils';
import EmptyState from '../../Components/StateComponent/EmptyState';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const TicketPlayedScreen = React.memo(props => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0);
  const [isNext, setNext] = useState(true);
  const [isRefresh, setRefresh] = useState(false);
  const [isFirstLoad, setFirstLoad] = useState(true);

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
    if (!isNext) return;
    let newData = [...dataList];
    if (isRefresh) newData = [];
    const res = await apiService.getUserPlayedTicket(page);
    const { data, status, statusText } = res;
    if (status === 200) {
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
  }

  function onRefresh() {
    setRefresh(true);
    setNext(true);
  }

  function renderHeader() {
    return (
      <View style={Styles.containerItem}>
        <View style={Styles.firstView}>
          <Text style={Styles.headerText}>Date</Text>
        </View>
        <View style={Styles.secondView}>
          <Text style={Styles.headerText}>Picked Number</Text>
        </View>
        <View style={Styles.thirdView}>
          <Text style={Styles.headerText}>Result</Text>
        </View>
        <View style={Styles.fourView}>
          <Text style={Styles.headerText}>Amount</Text>
        </View>
      </View>)
  }

  function renderItem(item, index) {
    const { white1_ball, white2_ball, white3_ball, created_at, power,
      white4_ball, white5_ball, red_ball, won_amount, is_win } = item;
    const date = moment(created_at).format('DD/MM/YY')
    return (
      <View style={[Styles.containerItem, index === 0 ? Styles.borderTop : null]}>
        <View style={Styles.firstView}>
          <Text style={Styles.itemText}>{date}</Text>
        </View>
        <View style={Styles.secondView}>
          <Text style={Styles.itemText}>{white1_ball}</Text>
          <Text style={Styles.itemText}>{white2_ball}</Text>
          <Text style={Styles.itemText}>{white3_ball}</Text>
          <Text style={Styles.itemText}>{white4_ball}</Text>
          <Text style={Styles.itemText}>{white5_ball}</Text>
          <Text style={[Styles.itemText, Styles.redItem]}>{red_ball}</Text>
          {power === 1 ? <Icon name='star' color='#FFCF20' size={Utils.hp(20)} /> : null}
        </View>
        <View style={Styles.thirdView}>
          <Text style={Styles.itemText}>{is_win === 0 ? 'Lost' : 'Win'}</Text>
        </View>
        <View style={[Styles.fourView, Styles.amountStyle]}>
          <Text style={Styles.itemText}>{won_amount}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      {renderHeader()}
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
      />
    </View>
  );
})

export default TicketPlayedScreen;