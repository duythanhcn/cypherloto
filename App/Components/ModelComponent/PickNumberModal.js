import React, { useEffect, useState } from 'react';
import Styles from './Styles/PickNumberModalStyles';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from 'react-native-popup-dialog';
import BallComponent from '../ItemComponent/BallComponent';
import Utils from '../../Common/Utils';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const test = Array(70).fill(1)
const test2 = Array(20).fill(1)

const PickNumberModal = React.memo(props => {
  const { onChange } = props;
  const [isVisible, setVisible] = useState(props.isVisible);
  const [data, setData] = useState({ ball: [], power: false })

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

  function setBall(value, status) {
    console.log(value, status)
    if (status) {
      if (data.ball.length < 4) {
        let newBall = [...data.ball];
        newBall.push(value);
        setData({ ...data, ball: newBall });
      }
    } else {
      let newBall = [...data.ball];
      const index = newBall.indexOf(value);
      newBall.splice(index, 1);
      setData({ ...data, ball: newBall });
    }
  }

  function clearNumber() {
    setData({ ball: [], power: false });
  }

  function onCancle() {
    clearNumber();
    props.onCancle();
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
            <BallComponent number={data.ball[0]} type={0} />
            <BallComponent number={data.ball[1]} type={0} />
            <BallComponent number={data.ball[2]} type={0} />
            <BallComponent number={data.ball[3]} type={0} />
            <BallComponent number={data.ball[4]} type={0} />
            <BallComponent number={data.ball[5]} type={1} />
          </View>
          <View style={Styles.actionView}>
            <TouchableOpacity
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
                <Text style={Styles.headerText}>Pick 5 number from 1 to 70</Text>
              </View>
              <View style={Styles.numberView}>
                <FlatList
                  style={Styles.listView1}
                  data={test}
                  numColumns={6}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => <BallComponent total={data.ball.length} number={index + 1} type={0} key={index} onSelect={(val, status) => setBall(val, status)} />}
                />
              </View>
              <View style={Styles.pickerLayer}>
                <View style={Styles.headerPicker}>
                  <Text style={Styles.headerText}>Pick 1 number from 1 to 20</Text>
                </View>
                <View style={Styles.numberView}>
                  <FlatList
                    style={Styles.listView2}
                    data={test2}
                    numColumns={6}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => <BallComponent number={index + 1} type={0} key={index} />}
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
            style={Styles.btnSave}>
            <Text style={Styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  );
})

export default PickNumberModal;