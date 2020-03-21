import React, { useState } from 'react';
import Styles from './Styles/BuyScreenStyles';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Utils from '../../Common/Utils';
import apiService from '../../Services/API';
import { connect } from 'react-redux';
import PickedNumberComponent from '../../Components/ItemComponent/PickedNumberComponent';
import PickNumberModal from '../../Components/ModelComponent/PickNumberModal';
import AlertModal from '../../Components/ModelComponent/AlertModal';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const BuyScreen = React.memo(props => {
  const { user, setBuy } = props;
  const [showPicker, setShowPicker] = useState(false);
  const [data, setData] = useState({ list: [], timestamp: Date.now() });
  const [isShowAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const actions = [
    { btnText: 'OK', btnAction: () => { setShowAlert(false), setMessage('') } }
  ]

  function onRemove(index) {
    let newData = [...data.list]
    newData.splice(index, 1)
    setData({ list: newData, timestamp: Date.now() });
  }

  function oncancel() {
    setData({ list: [], timestamp: Date.now() })
  }

  async function onBuy() {
    const { email, balance } = user;
    const _tickets = await processData();
    const amount = _tickets.amount;
    const tickets = _tickets.tickets;
    if (tickets.length <= 0) {
      setMessage('Please pickup your number');
      setShowAlert(true);
      return;
    }
    if (balance <= 0) {
      setMessage('The balance is not enough to make a transaction');
      setShowAlert(true);
      return;
    }
    const response = await apiService.buyTicket(email, amount, tickets);
    const { data } = response;
    if (!data.errors) {
      setMessage('Transaction Success');
      setBuy({ isBuy: true });
    } else {
      setMessage(data.errors.message)
    }
    setShowAlert(true);
    setData({ list: [], timestamp: Date.now() })
  }

  function processData() {
    let amount = 0;
    const { list } = data;
    let tickets = [];
    for (let i = 0; i < list.length; i++) {
      amount += 2;
      const item = list[i];
      const ticket = {
        whiteBalls: [item.ball[0], item.ball[1], item.ball[2], item.ball[3], item.ball[4]],
        redBall: item.ball[5],
        power: item.power ? 1 : 0
      }
      if (item.power) amount += 1;
      tickets.push(ticket);
    }
    return { tickets, amount };
  }

  function onAddNum(_data) {
    let newData = [...data.list];
    newData.unshift(_data);
    setData({ list: newData, timestamp: Date.now() });
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.actionView}>
        <View style={Styles.cancelView}>
          <TouchableOpacity
            onPress={() => oncancel()}
            style={Styles.btnCancel}>
            <Text style={Styles.actionText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.addView}>
          <TouchableOpacity
            onPress={() => setShowPicker(true)}
            style={Styles.btnAdd}>
            <Icon name='plus' style={Styles.addIcon} size={Utils.hp(30)} />
          </TouchableOpacity>
        </View>
        <View style={Styles.buyView}>
          <TouchableOpacity
            onPress={() => onBuy()}
            style={Styles.btnBuy}>
            <Text style={Styles.actionText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.bodyView}>
        <View style={Styles.headerListView}>
          <Text style={Styles.headerListText}>Your Number Picked</Text>
        </View>
        <View style={Styles.bodyListView}>
          <FlatList
            style={Styles.listView}
            data={data.list}
            extraData={data.timestamp}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <PickedNumberComponent data={item} index={index} key={index} onRemove={(index) => onRemove(index)} />}
            ItemSeparatorComponent={() => <View style={Styles.seperatorView} />}
          />
        </View>
      </View>
      <PickNumberModal
        isVisible={showPicker}
        onCancle={() => setShowPicker(false)}
        onSave={data => onAddNum(data)} />
      <AlertModal
        isVisible={isShowAlert}
        message={message}
        title='Inform'
        actions={actions} />
    </View >);
})

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setBuy: (data) => dispatch({ data, type: 'SET_BUY' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyScreen);