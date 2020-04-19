import React, { useState, useEffect } from 'react';
import Styles from './Styles/BalanceComponentStyles';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Utils from '../../Common/Utils';

const BalanceComponent = React.memo(props => {
  const { user } = props;
  const [balance, setBalance] = useState(user.balance)

  useEffect(() => {
    setBalance(user.balance)
  }, [user.balance])

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Your Balance: {Utils.usdtFormat(balance)}</Text>
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
