import React, { useState, useEffect } from 'react';
import Styles from './Styles/SearchInputStyles';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { connect } from 'react-redux';

const SearchInputScreen = React.memo(props => {
  const { setSearch } = props;
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setSearch({ date: moment(date).format('YYYY-MM-DD') });
  }, [date])

  return (
    <View style={Styles.container}>
      <DatePicker
        date={date}
        onDateChange={setDate}
        mode='date'
      />
    </View>
  );
});

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setSearch: (data) => dispatch({ data, type: 'SET_SEARCH' }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputScreen);