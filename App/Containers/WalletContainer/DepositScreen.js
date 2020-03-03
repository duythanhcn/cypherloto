import React, { useEffect, useState } from 'react';
import Styles from './Styles/DepositScreenStyles';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Utils from '../../Common/Utils';
import moment from 'moment';
import { connect } from 'react-redux';
import apiService from '../../Services/API';
import EmptyState from '../../Components/StateComponent/EmptyState';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

let timerLoad = null;

const DepositScreen = React.memo(props => {
  const { navigation, user } = props;
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
      getDepositeHistory();
    }, 500)
  }

  async function getDepositeHistory() {
    if (!isNext) return;
    let newData = [...dataList];
    if (isRefresh) newData = [];
    const res = await apiService.getDepositeHistory(page);
    const { data, status, statusText } = res;
    if (status === 200) {
      const { deposit_history } = data;
      if (deposit_history.length > 0) {
        newData = [...newData, ...deposit_history];
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
        <View style={Styles.firstView}>
          <Text style={Styles.headerText}>Date</Text>
        </View>
        <View style={Styles.secondView}>
          <Text style={Styles.headerText}>Address</Text>
        </View>
        <View style={Styles.thirdView}>
          <Text style={Styles.headerText}>Amount</Text>
        </View>
        <View style={Styles.fourView}>
          <Text style={Styles.headerText}>Status</Text>
        </View>
      </View>)
  }

  function renderItem(item, index) {
    const { address, amount, status, date } = item;
    const _date = moment(date).format('DD/MM/YY');
    let icon = 'times';
    let color = 'red';
    if (status === 'Completed') {
      icon = 'check';
      color = 'green';
    } else if (status == 'Pending') {
      icon = 'stop-circle';
      color = '#FFCF20';
    }
    return (
      <View style={[Styles.containerItem, index === 0 ? Styles.borderTop : null]}>
        <View style={Styles.firstView}>
          <Text style={Styles.itemText}>{_date}</Text>
        </View>
        <View style={Styles.secondView}>
          <Text style={Styles.itemText}>{address}</Text>
        </View>
        <View style={Styles.thirdView}>
          <Text style={Styles.itemText}>{amount}</Text>
        </View>
        <View style={[Styles.fourView, Styles.amountStyle]}>
          <Text style={Styles.itemText}>
            <Icon name={icon} color={color} size={Utils.hp(25)} />
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.walletView}>
        <Text style={Styles.walletWarning}>Important</Text>
        <Text style={Styles.walletWarningMess}>Send only USDT to this deposit address. Sending any other coin or token to this address may result in the loss of your deposit.</Text>
        <Text style={Styles.walletTitle}>USDT Deposit Address</Text>
        <View style={Styles.walletBox}>
          <Text style={Styles.walletAdd}>{user.address}</Text>
        </View>
        <View style={Styles.walletCopy}>
          <TouchableOpacity
            style={Styles.btnWalletCopy}>
            <Icon name='copy' color='gray' size={Utils.hp(25)} />
            <Text style={Styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.historyView}>
        <View style={Styles.historyHeader}>
          <Text style={Styles.walletWarning}>Please note</Text>
          <Text style={Styles.walletWarningMess}>Coins will be deposited immediately after 15 network confirmations</Text>
          <Text style={Styles.walletTitle}>Recent Deposit History</Text>
        </View>
        <View style={Styles.historyList}>
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
      </View>
    </View>
  )
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DepositScreen);