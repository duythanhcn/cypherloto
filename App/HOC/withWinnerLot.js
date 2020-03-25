import React, { useState, useEffect } from 'react'
import apiService from '../Services/API';

function withWinnerLot(WrappedComponent) {
  return (
    (props) => {
      const [winnerLot, setWinnerLot] = useState([]);

      useEffect(() => {
        nextWinnerNumber();
      }, [])

      async function nextWinnerNumber() {
        const res = await apiService.getWinnerLot(10);
        const { data } = res;
        if (!data.errors) {
          setWinnerLot(data);
        }
      }

      if (winnerLot.length <= 0) {
        return null;
      }
      return (
        <WrappedComponent
          winnerLot={winnerLot}
          {...props} />
      )
    }
  )

}

export default withWinnerLot;