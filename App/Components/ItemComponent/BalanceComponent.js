import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/BalanceComponentStyles';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const BalanceComponent = React.memo(props => {
  const { user } = props;
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Your Balance: {user.balance}</Text>
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
