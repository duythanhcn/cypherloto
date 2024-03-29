import React from 'react';
import Styles from './Styles/InformationScreenStyles'
import { View, Text, ScrollView } from 'react-native';
import Utils from '../../Common/Utils';
import BallComponent from '../../Components/ItemComponent/BallComponent';

const data = []
const price = [
  ['Grandprize', 'Grandprize', 'Grandprize', 'Grandprize', 'Grandprize', 'Grandprize'],
  ['1 M USDT', '2 M USDT', '2 M USDT', '2 M USDT', '2 M USDT', '2 M USDT'],
  ['50,000 USDT', '100 M USDT', '150 M USDT', '200 M USDT', '250 M USDT', '500 M USDT'],
  ['100 USDT', '200 USDT', '300 USDT', '400 USDT', '500 USDT', '1000 USDT'],
  ['100 USDT', '200 USDT', '300 USDT', '400 USDT', '500 USDT', '1000 USDT'],
  ['7 USDT', '14 USDT', '21 USDT', '28 USDT', '35 USDT', '70 USDT'],
  ['7 USDT', '14 USDT', '21 USDT', '28 USDT', '35 USDT', '70 USDT'],
  ['4 USDT', '8 USDT', '12 USDT', '16 USDT', '20 USDT', '40 USDT'],
  ['4 USDT', '8 USDT', '12 USDT', '16 USDT', '20 USDT', '40 USDT'],
]
const InformationScreen = React.memo(props => {

  function renderItem(item, index) {
    return (
      <View style={Styles.itemView} key={'ball' + index}>
        <View style={[Styles.view1, Styles.SpecialView]}>
          {[0, 1, 2, 3, 4, 5, 6, 7].indexOf(index) !== -1 ?
            <BallComponent number={data[0]} size={Utils.wp(40)} type={0} textSize={Utils.wp(14)} /> : null}
          {[0, 1, 2, 3, 4, 5, 6].indexOf(index) !== -1 ?
            <BallComponent number={data[0]} size={Utils.wp(40)} type={0} textSize={Utils.wp(14)} /> : null}
          {[0, 1, 2, 3, 4, 5].indexOf(index) !== -1 ?
            <BallComponent number={data[0]} size={Utils.wp(40)} type={0} textSize={Utils.wp(14)} /> : null}
          {[0, 1, 2, 3].indexOf(index) !== -1 ?
            <BallComponent number={data[0]} size={Utils.wp(40)} type={0} textSize={Utils.wp(14)} /> : null}
          {[0, 1].indexOf(index) !== -1 ?
            <BallComponent number={data[0]} size={Utils.wp(40)} type={0} textSize={Utils.wp(14)} /> : null}
          {[0, 2, 4, 6, 7, 8].indexOf(index) !== -1 ?
            <BallComponent number={data[0]} size={Utils.wp(40)} type={1} textSize={Utils.wp(14)} /> : null}
        </View>
        {item.map((it, i) =>
          <View style={[Styles.view2, i % 2 == 0 ? Styles.odView : null]} key={'price' + i}>
            <Text style={Styles.itemText}>{it}</Text>
          </View>)}
      </View>
    )
  }
  return (
    <View style={Styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View>
          <View style={Styles.itemView}>
            <View style={[Styles.view1, Styles.headerView]}>
              <Text style={Styles.headerText}>Match</Text>
            </View>
            <View style={[Styles.view2, Styles.odView]}>
              <Text style={Styles.headerText}>Price</Text>
            </View>
            <View style={Styles.view2}>
              <Text style={Styles.headerText}>Mega Play 2X</Text>
            </View>
            <View style={[Styles.view2, Styles.odView]}>
              <Text style={Styles.headerText}>Mega Play 3X</Text>
            </View>
            <View style={Styles.view2}>
              <Text style={Styles.headerText}>Mega Play 4X</Text>
            </View>
            <View style={[Styles.view2, Styles.odView]}>
              <Text style={Styles.headerText}>Mega Play 5X</Text>
            </View>
            <View style={Styles.view2}>
              <Text style={Styles.headerText}>Mega Play 10X</Text>
            </View>
          </View>
          {price.map((item, index) => renderItem(item, index))}
        </View>
      </ScrollView>
    </View>);
})

export default InformationScreen;