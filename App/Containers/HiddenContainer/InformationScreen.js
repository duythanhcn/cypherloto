import React, { useEffect } from 'react';
import Styles from './Styles/InformationScreenStyles'
import { View, Text } from 'react-native';

const InformationScreen = React.memo(props => {
  return (<View style={Styles.container}>
    <Text style={Styles.text}>9 ways to win!</Text>
    <Text style={Styles.text}>suitcase</Text>
    <Text style={Styles.text}>There are 9 ways to win a prize in Mega Ball®.</Text>
    <Text style={Styles.text}>All prizes are set cash amounts, except the Grand Prize.</Text>
    <Text style={Styles.text}>In California, prize payout amounts are pari-mutuel and determined by sales and the number of winners.</Text>
  </View>);
})

export default InformationScreen;