import React from 'react';
import Styles from './Styles/BalanceComponentStyles';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Utils from '../../Common/Utils';

const BalanceComponent = React.memo(props => {
  const { user } = props;
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Your Balance: {Utils.usdtFormat(user.balance)}</Text>
    </View>
  )
})

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setUser: (data) => dispatch({ data, type: 'SET_USER' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceComponent);
