import React, { useEffect, useState } from 'react';
import Styles from './Styles/DepositScreenStyles';
import { View, Text, TouchableOpacity, FlatList, Clipboard } from 'react-native';
import Utils from '../../Common/Utils';
import moment from 'moment-timezone';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import apiService from '../../Services/API';
import { STATUS_ICON } from '../../Common/constants';
import EmptyState from '../../Components/StateComponent/EmptyState';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

let timerLoad = null;
let timerRefresh = null;
const DepositScreen = React.memo(props => {
  const { user } = props;
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
    if (isRefresh) {
      getData();
    }
    timerRefresh = setTimeout(() => {
      setRefresh(false)
    }, 10000)
  }, [isRefresh])

  async function getData() {
    if (isLoad && !isRefresh) return;
    clearTimeout(timerLoad);
    timerLoad = setTimeout(() => {
      setLoad(true);
      getDepositeHistory();
    }, 500)
  }

  async function getDepositeHistory() {
    if (!isNext) return;
    let newData = [...dataList];
    let _page = page;
    if (isRefresh) {
      newData = [];
      _page = 0;
    }
    try {
      const res = await apiService.getDepositeHistory(user.email, 10, _page);
      const { data } = res;
      if (!data.errors) {
        const { deposit_history } = data;
        if (deposit_history.length > 0) {
          newData = [...newData, ...deposit_history];
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
    const _date = moment(date).tz('America/New_York').format('MM.DD.YY');
    const statusGroup = STATUS_ICON[status.toUpperCase()];
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
            <Icon name={statusGroup.icon} color={statusGroup.color} size={Utils.hp(20)} />
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
            onPress={() => Clipboard.setString(user.address)}
            style={Styles.btnWalletCopy}>
            <Icon name='copy' color='gray' size={Utils.hp(20)} />
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
            showsVerticalScrollIndicator={false}
            refreshing={isRefresh}
            style={Styles.listView}
            data={dataList}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => renderItem(item, index)}
            onEndReached={() => isNext ? loadNext() : null}
            onRefresh={() => onRefresh()}
            ListEmptyComponent={isFirstLoad || isRefresh ? null : <EmptyState />}
            ListFooterComponent={isLoad && isNext ? Spinner : null}
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