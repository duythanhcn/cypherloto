import React, { useState, useEffect } from 'react';
import Styles from './Styles/SearchResultStyles';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import apiService from '../../Services/API';
import EmptyState from '../../Components/StateComponent/EmptyState';
import BallComponent from '../../Components/ItemComponent/BallComponent';
import moment from 'moment';
import Utils from '../../Common/Utils';
import AlertModal from '../../Components/ModelComponent/AlertModal';
import { withNavigation } from 'react-navigation'

const SearchResultScreen = React.memo(props => {
  const { searchParams, navigation } = props;
  const [dataList, setDataList] = useState([]);
  const [isFirstLoad, setFirstLoad] = useState(true);
  const [isShowAlert, setShowAlert] = useState(false);
  const actions = [
    {
      btnText: 'OK', btnAction: () => {
        setShowAlert(false);
      }
    },
    {
      btnText: 'New Search', btnAction: () => {
        setShowAlert(false);
        navigation.goBack();
      }
    }
  ]

  useEffect(() => {
    search();
  }, [])

  async function search() {
    const res = await apiService.searchLot(searchParams.date);
    const { data } = res;
    if (!data.errors) {
      const { lottery } = data;
      if (lottery) {
        setDataList([lottery]);
      } else {
        setShowAlert(true);
      }
    } else {
      setShowAlert(true);
    }
    setFirstLoad(false);
  }

  function renderItem(item, index) {
    console.log(item)
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
        <Text style={Styles.payoutValue}>{Utils.usdtFormat(jackpot_value)}</Text>
        <Text style={Styles.winner}>{total_jackpot === 0 ? 'NO' : total_jackpot} JACKPOT WINNER</Text>
      </View>
    )
  }

  function renderSeparator() {
    return (<View style={Styles.seperatorView}></View>)
  }

  return (
    <View style={Styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshing={false}
        style={Styles.listView}
        data={dataList}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => renderItem(item, index)}
        ListEmptyComponent={isFirstLoad ? null : <EmptyState />}
        ItemSeparatorComponent={renderSeparator}
        onEndReachedThreshold={1}
      />
      <AlertModal
        isVisible={isShowAlert}
        message='No drawings found on selected date'
        title='Search'
        actions={actions} />
    </View>
  );
});

const mapStateToProps = state => {
  return { searchParams: state.search }
}

const mapDispatchToProps = dispatch => {
  return { setSearch: (data) => dispatch({ data, type: 'SET_SEARCH' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(SearchResultScreen));