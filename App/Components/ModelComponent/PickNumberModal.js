import React, { useEffect, useState } from 'react';
import Styles from './Styles/PickNumberModalStyles';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Dialog from 'react-native-popup-dialog';
import BallComponent from '../ItemComponent/BallComponent';
import Utils from '../../Common/Utils';
import AlertModal from '../../Components/ModelComponent/AlertModal';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const _whiteBall = Array(69).fill(1);
const _redBall = Array(26).fill(1);

const PickNumberModal = React.memo(props => {
  const { } = props;
  const [isVisible, setVisible] = useState(props.isVisible);
  const [data, setData] = useState({ whiteBall: [], redBall: [], power: false });
  const [isRandom, setIsRandom] = useState(false);
  const [isShowAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const actions = [
    { btnText: 'OK', btnAction: () => { setShowAlert(false), setMessage('') } }
  ]

  useEffect(() => {
    const func = () => {
      setVisible(props.isVisible);
    }
    func();
  }, [props.isVisible])

  useEffect(() => {
    const func = () => {
      setTimeout(() => {
        setIsRandom(false);
      }, 1)
    }
    func();
  }, [data])

  useEffect(() => {
    const func = async () => {
      if (isRandom) {
        let whiteBall = await Utils.randomNumberInList(5, 1, 69);
        const redBall = await Utils.randomNumberInList(1, 1, 26);
        setData({ power: false, whiteBall, redBall });
      }
    }
    func();
  }, [isRandom])

  function onPower() {
    setData({ ...data, power: !data.power })
  }

  function setWhiteBall(value) {
    let newBall = [...data.whiteBall];
    const index = newBall.indexOf(value);
    if (index === -1 && data.whiteBall.length < 5) {
      newBall.push(value);
    } else if (index !== -1) {
      newBall.splice(index, 1);
    }
    setData({ ...data, whiteBall: newBall.sort() });
  }

  function setRedBall(value) {
    let newBall = [...data.redBall];
    const index = newBall.indexOf(value);
    if (index === -1 && data.redBall.length < 1) {
      newBall.push(value);
    } else if (index !== -1) {
      newBall.splice(index, 1);
    }
    setData({ ...data, redBall: newBall });
  }

  function clearNumber() {
    setData({ whiteBall: [], redBall: [], power: false });
  }

  function randomNumber() {
    if (isRandom) return;
    setIsRandom(true);
  }

  function onCancle() {
    clearNumber();
    props.onCancle();
  }

  function onSave() {
    if (data.whiteBall.length < 5 || data.redBall.length < 1) {
      setMessage('Please pick 5 white ball and 1 red ball');
      setShowAlert(true);
      return;
    }
    let newWhiteBall = [...data.whiteBall];
    newWhiteBall.sort(function (a, b) { return a - b });
    const newData = { ball: [...newWhiteBall, ...data.redBall], power: data.power };
    props.onSave(newData);
    onCancle();
  }

  function renderNumPad2() {
    return (
      <View style={Styles.pickerLayer2}>
        <View style={Styles.headerPicker}>
          <Text style={Styles.headerText}>Pick 1 number from 1 to 26</Text>
        </View>
        <View style={Styles.numberView}>
          {_redBall.map((item, index) => <BallComponent data={data.redBall} number={index + 1} type={1} key={index} onSelect={(val) => setRedBall(val)} isAction={true} />)}
        </View>
      </View>
    )
  }

  function renderNumPad1() {
    return (
      <View style={Styles.pickerLayer1}>
        <View style={Styles.headerPicker}>
          <Text style={Styles.headerText}>Pick 5 number from 1 to 69</Text>
        </View>
        <View style={Styles.numberView}>
          {_whiteBall.map((item, index) => <BallComponent data={data.whiteBall} number={index + 1} type={0} key={index} onSelect={(val) => setWhiteBall(val)} isAction={true} />)}
        </View>
      </View>
    )
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
              disabled={isRandom}
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
            <View>
              {renderNumPad1()}
              {renderNumPad2()}
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
      <AlertModal
        isVisible={isShowAlert}
        message={message}
        title='Inform'
        actions={actions} />
    </Dialog>
  );
})

export default PickNumberModal;