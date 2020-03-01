import React, { useEffect, useState } from 'react';
import Styles from './Styles/WithdrawScreenStyles';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Form, Input, Item } from 'native-base'
import Utils from '../../Common/Utils';
import moment from 'moment';
import EmptyState from '../../Components/StateComponent/EmptyState';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const WithdrawScreen = React.memo(props => {
  const { navigation } = props;
  const [dataList, setDataList] = useState([1, 2, 3]);
  const [page, setPage] = useState(0);
  const [isNext, setNext] = useState(true);
  const [isRefresh, setRefresh] = useState(false);
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState(0);
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
    const res = await apiService.getDepositeHistory(page);
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
    const date = moment().format('DD/MM/YY');
    let icon = 'times';
    let color = 'red';
    if (index == 0) {
      icon = 'check';
      color = 'green';
    } else if (index == 2) {
      icon = 'stop-circle';
      color = '#197BFF';
    }
    return (
      <View style={[Styles.containerItem, index === 0 ? Styles.borderTop : null]}>
        <View style={Styles.firstView}>
          <Text style={Styles.itemText}>{date}</Text>
        </View>
        <View style={Styles.secondView}>
          <Text style={Styles.itemText}>0xC2D8d2e2a39485BBac1345a3F9fbFf10e85252C5</Text>
        </View>
        <View style={Styles.thirdView}>
          <Text style={Styles.itemText}>1000</Text>
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
        <Text style={Styles.walletWarningMess}>Do not withdraw directly to a crowdfund or ICO address, as your account will not be credited with tokens from such sales</Text>

        <View style={Styles.walletBox}>
          <View style={Styles.inputView}>
            <Input style={Styles.input}
              value={address}
              onChangeText={val => setAddress(val)}
              placeholder="Address" />
          </View>
          <View style={Styles.inputView}>
            <Input style={Styles.input}
              value={amount}
              keyboardType='numeric'
              onChangeText={val => setAmount(val)}
              placeholder="Amount" />
          </View>
          <View style={Styles.submitView}>
            <TouchableOpacity
              onPress={() => { }}
              style={Styles.btnSubmit}>
              <Text style={Styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <View style={Styles.historyView}>
        <View style={Styles.historyHeader}>
          <Text style={Styles.walletWarning}>Please note</Text>
          <Text style={Styles.walletWarningMess}>Coins will be deposited immediately after 15 network confirmations</Text>
          <Text style={Styles.walletTitle}>Recent Withdrawal History</Text>
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
          />
        </View>
      </View>
    </View>
  )
});

export default WithdrawScreen;