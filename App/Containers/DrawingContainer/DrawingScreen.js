import React, { useEffect, useState } from 'react';
import Styles from './Styles/DrawingScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import moment from 'moment';
import EmptyState from '../../Components/StateComponent/EmptyState';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const DrawingScreen = React.memo(props => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0);
  const [isNext, setNext] = useState(true);
  const [isRefresh, setRefresh] = useState(false);

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
    const res = await apiService.getDrawing(page);
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
    setRefresh(false)
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
    const { white1_ball, white2_ball, white3_ball, white4_ball,
      white5_ball, red_ball, created_at } = item;
    const date = moment(created_at).format('DD/MM/YY')
    return (
      <View style={[Styles.containerItem, index === 0 ? Styles.borderTop : null]}>
        <View style={Styles.leftView}>
          <Text style={Styles.itemText}>{date}</Text>
        </View>
        <View style={Styles.rightView}>
          <Text style={Styles.itemText}>{white1_ball}</Text>
          <Text style={Styles.itemText}>{white2_ball}</Text>
          <Text style={Styles.itemText}>{white3_ball}</Text>
          <Text style={Styles.itemText}>{white4_ball}</Text>
          <Text style={Styles.itemText}>{white5_ball}</Text>
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
        ListEmptyComponent={<EmptyState />}
      />
    </View>
  );
})

export default DrawingScreen;