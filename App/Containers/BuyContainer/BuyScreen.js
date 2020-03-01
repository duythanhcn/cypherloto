import React, { useEffect, useState } from 'react';
import Styles from './Styles/BuyScreenStyles';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Utils from '../../Common/Utils';
import PickedNumberComponent from '../../Components/ItemComponent/PickedNumberComponent';
import PickNumberModal from '../../Components/ModelComponent/PickNumberModal';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const BuyScreen = React.memo(props => {
  const [showPicker, setShowPicker] = useState(false);
  const [data, setData] = useState([{ ball: [20, 20, 20, 20, 20, 20], power: true }]);

  function onRemove(index) {
    console.log('remove', index, data)
    let newData = data
    newData.splice(index, 1)
    console.log(newData)
    setData(newData)
  }

  function oncancel() {
    setData([])
  }

  function onBuy() {
    setData([])
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
            <Icon name='plus' style={Styles.addIcon} size={Utils.hp(40)} />
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
            data={data}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <PickedNumberComponent data={item} index={index} key={index} onRemove={(index) => onRemove(index)} />}
            ItemSeparatorComponent={() => <View style={Styles.seperatorView} />}
          />
        </View>
      </View>
      <PickNumberModal
        isVisible={showPicker}
        onCancle={() => setShowPicker(false)} />
    </View >);
})

export default BuyScreen;