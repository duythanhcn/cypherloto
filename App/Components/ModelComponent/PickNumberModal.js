import React, { useEffect, useState } from 'react';
import Styles from './Styles/PickNumberModalStyles';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from 'react-native-popup-dialog';
import BallComponent from '../ItemComponent/BallComponent';
import Utils from '../../Common/Utils';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const _whiteBall = Array(69).fill(1);
const _redBall = Array(26).fill(1);

const PickNumberModal = React.memo(props => {
  const { onChange } = props;
  const [isVisible, setVisible] = useState(props.isVisible);
  const [data, setData] = useState({ whiteBall: [], redBall: [], power: false })

  useEffect(() => {
    setVisible(props.isVisible);
  }, [props.isVisible])

  function onSubmit() {
    if (code) {
      onChange(code)
    }
  }

  function onPower() {
    setData({ ...data, power: !data.power })
  }

  function setWhiteBall(value, status) {
    let newBall = [...data.whiteBall];
    const index = newBall.indexOf(value);
    if (status) {
      if (data.whiteBall.length < 5) {
        newBall.push(value);
        setData({ ...data, whiteBall: newBall });
      }
    } else {
      if (index !== -1) {
        newBall.splice(index, 1);
        setData({ ...data, whiteBall: newBall });
      }
    }
  }

  function setRedBall(value, status) {
    let newBall = [...data.redBall];
    const index = newBall.indexOf(value);
    if (status) {
      if (data.redBall.length < 1) {
        newBall.push(value);
        setData({ ...data, redBall: newBall });
      }
    } else {
      if (index !== -1) {
        newBall.splice(index, 1);
        setData({ ...data, redBall: newBall });
      }
    }
  }

  function clearNumber() {
    setData({ whiteBall: [], redBall: [], power: false });
  }

  function randomNumber() {
    const whiteBall = Utils.randomNumberInList(5, 1, 69);
    const redBall = Utils.randomNumberInList(1, 1, 26);
    setData({ power: false, whiteBall, redBall })
  }

  function onCancle() {
    clearNumber();
    props.onCancle();
  }

  function onSave() {
    const newData = { ball: [...data.whiteBall, ...data.redBall], power: data.power };
    props.onSave(newData);
    onCancle();
  }

  return (
    <Dialog
      visible={isVisible}
      width={0.9}
      height={0.9}
      onHardwareBackPress={() => false}
      onTouchOutside={() => onCancle()}
      dialogStyle={Styles.dialogStyle}>
      <View style={Styles.container}>
        <View style={Styles.currentView}>
          <View style={Styles.pickedNumber}>
            <BallComponent number={data.whiteBall[0]} type={0} />
            <BallComponent number={data.whiteBall[1]} type={0} />
            <BallComponent number={data.whiteBall[2]} type={0} />
            <BallComponent number={data.whiteBall[3]} type={0} />
            <BallComponent number={data.whiteBall[4]} type={0} />
            <BallComponent number={data.redBall[0]} type={1} />
          </View>
          <View style={Styles.actionView}>
            <TouchableOpacity
              onPress={() => randomNumber()}
              style={Styles.btnAction}>
              <Text style={Styles.actionText}>Quick Pick</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnAction}
              onPress={() => onPower()}>
              <Icon name='star' color={data.power ? '#FFCF20' : 'gray'} size={Utils.hp(40)} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => clearNumber()}
              style={Styles.btnAction}>
              <Text style={Styles.actionText}>Clear Number</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.pickView}>
          <ScrollView style={Styles.scrollView}>
            <View style={Styles.pickerLayer}>
              <View style={Styles.headerPicker}>
                <Text style={Styles.headerText}>Pick 5 number from 1 to 69</Text>
              </View>
              <View style={Styles.numberView}>
                <FlatList
                  style={Styles.listView1}
                  data={_whiteBall}
                  numColumns={6}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => <BallComponent data={data.whiteBall} total={data.whiteBall.length} number={index + 1} type={0} key={index} onSelect={(val, status) => setWhiteBall(val, status)} />}
                />
              </View>
              <View style={Styles.pickerLayer}>
                <View style={Styles.headerPicker}>
                  <Text style={Styles.headerText}>Pick 1 number from 1 to 26</Text>
                </View>
                <View style={Styles.numberView}>
                  <FlatList
                    style={Styles.listView2}
                    data={_redBall}
                    numColumns={6}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => <BallComponent data={data.redBall} total={data.redBall.length} number={index + 1} type={1} key={index} onSelect={(val, status) => setRedBall(val, status)} />}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={Styles.saveView}>
          <TouchableOpacity
            onPress={() => onCancle()}
            style={Styles.btnSave}>
            <Text style={Styles.saveText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSave()}
            style={Styles.btnSave}>
            <Text style={Styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  );
})

export default PickNumberModal;