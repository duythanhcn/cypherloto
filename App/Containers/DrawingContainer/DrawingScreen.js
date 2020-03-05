import React, { useEffect, useState } from 'react';
import Styles from './Styles/DrawingScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import moment from 'moment';
import EmptyState from '../../Components/StateComponent/EmptyState';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

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
    const { data, status, statusText } = res;
    if (status === 200) {
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

  function renderHeader() {
    return (
      <View style={Styles.containerItem}>
        <View style={Styles.leftView}>
          <Text style={Styles.headerText}>Date</Text>
        </View>
        <View style={[Styles.rightView, Styles.headerStyles]}>
          <Text style={Styles.headerText}>Result</Text>
        </View>
      </View>)
  }

  function renderItem(item, index) {
    const { white_ball_1, white_ball_2, white_ball_3, white_ball_4,
      white_ball_5, red_ball, date_created } = item;
    const date = moment(date_created).format('DD/MM/YY')
    return (
      <View style={[Styles.containerItem, index === 0 ? Styles.borderTop : null]}>
        <View style={Styles.leftView}>
          <Text style={Styles.itemText}>{date}</Text>
        </View>
        <View style={Styles.rightView}>
          <Text style={Styles.itemText}>{white_ball_1}</Text>
          <Text style={Styles.itemText}>{white_ball_2}</Text>
          <Text style={Styles.itemText}>{white_ball_3}</Text>
          <Text style={Styles.itemText}>{white_ball_4}</Text>
          <Text style={Styles.itemText}>{white_ball_5}</Text>
          <Text style={[Styles.itemText, Styles.redItem]}>{red_ball}</Text>
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
        onEndReachedThreshold={1}
      />
    </View>
  );
})

export default DrawingScreen;