import React from 'react';
import Styles from './Styles/HomeWithoutAccountScreenStyles';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import HomeScreen from '../HomeContainer/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const HomeWithoutAccountScreen = React.memo(props => {
  const { navigation } = props;

  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.headerView}>
          <Text style={Styles.headerText}>TRY YOUR GAME</Text>
        </View>
        <View style={Styles.signinView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            style={Styles.buttonView}>
            <Text style={Styles.btnText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <HomeScreen />
      </ScrollView>
    </View>);
})

export default HomeWithoutAccountScreen;