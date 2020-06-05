import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native'
import Styles from './Styles/BalanceHistoryScreenStyles'
import apiService from '../../Services/API';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import moment from 'moment-timezone';
import EmptyState from '../../Components/StateComponent/EmptyState';

let timerLoad = null;
const BalanceHistoryScreen = React.memo(props => {
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
      getHistory();
    }, 500)
  }

  async function getHistory() {
    if (!isNext) return;
    let newData = [...dataList];
    if (isRefresh) newData = [];
    try {
      const res = await apiService.getBalanceHistory(user.email, 10, page);
      const { data } = res;
      if (!data.errors) {
        const { balance_history } = data;
        if (balance_history.length > 0) {
          newData = [...newData, ...balance_history];
        } else {
          setNext(false);
        }
      }
    } catch (err) {

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
        <View style={Styles.firstView}>
          <Text style={Styles.headerText}>Date</Text>
        </View>
        <View style={Styles.secondView}>
          <Text style={Styles.headerText}>Amount</Text>
        </View>
        <View style={Styles.thirdView}>
          <Text style={Styles.headerText}>Information</Text>
        </View>
      </View>)
  }

  function renderItem(item, index) {
    const { info, amount, date } = item;
    const _date = moment(date).tz('America/New_York').format('MM/DD/YY');
    return (
      <View style={[Styles.containerItem, index === 0 ? Styles.borderTop : null]}>
        <View style={Styles.firstView}>
          <Text style={Styles.itemText}>{_date}</Text>
        </View>
        <View style={Styles.secondView}>
          <Text style={Styles.itemText}>{amount}</Text>
        </View>
        <View style={Styles.thirdView}>
          <Text style={Styles.itemText}>{info}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      {renderHeader()}
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
        ListEmptyComponent={isFirstLoad || isRefresh ? null : <EmptyState />}
        ListFooterComponent={isLoad ? Spinner : null}
        onEndReachedThreshold={1}
      />
    </View>)
})

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceHistoryScreen);