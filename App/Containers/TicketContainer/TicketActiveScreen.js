import React, { useEffect, useState } from 'react';
import Styles from './Styles/TicketActiveScreenStyles';
import { View, Text, FlatList } from 'react-native';
import apiService from '../../Services/API';
import Utils from '../../Common/Utils';
import { connect } from 'react-redux';
import EmptyState from '../../Components/StateComponent/EmptyState';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const TicketActiveScreen = React.memo(props => {
  const { user } = props;
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
    const res = await apiService.getUserActiveTicket(user.email, 10, page);
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
        <View style={Styles.leftView}>
          <Text style={Styles.headerText}>Picked Number</Text>
        </View>
        <View style={[Styles.rightView, Styles.headerStyles]}>
          <Text style={Styles.headerText}>Amount</Text>
        </View>
      </View>)
  }

  function renderItem(item, index) {
    const { white1_ball, white2_ball, white3_ball, white4_ball,
      white5_ball, red_ball, won_amount, power } = item;
    return (
      <View style={[Styles.containerItem, index === 0 ? Styles.borderTop : null]}>
        <View style={Styles.leftView}>
          <Text style={Styles.itemText}>{white1_ball}</Text>
          <Text style={Styles.itemText}>{white2_ball}</Text>
          <Text style={Styles.itemText}>{white3_ball}</Text>
          <Text style={Styles.itemText}>{white4_ball}</Text>
          <Text style={Styles.itemText}>{white5_ball}</Text>
          <Text style={[Styles.itemText, Styles.redItem]}>{red_ball}</Text>
          {power === 1 ? <Icon name='star' color='#FFCF20' size={Utils.hp(20)} /> : null}
        </View>
        <View style={Styles.rightView}>
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

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketActiveScreen);