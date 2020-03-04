import axios from 'axios';
import { API_URL } from '../Common/constants';
import Message from '../Common/Message';
import Utils from '../Common/Utils';
import { connect } from 'react-redux';

const baseURL = 'http://95.216.25.89:3001/api/v1';

const POST = function (url, headers, data) {
  return new Promise((resolve, reject) => {
    axios.post(baseURL + url, data, {
      headers: { ...headers, 'Content-Type': 'application/json' }
    }).then(({ data, status, statusText }) => {
      resolve({ data, status, statusText });
    }).catch(ex => {
      console.log('ex', ex)
      resolve({ data: null, status: 500, statusText: Message.ServiceError })
    })
  })
}
const GET = function (url, headers, data) {
  return new Promise((resolve, reject) => {
    axios.get(baseURL + url, data, {
      headers: { ...headers, 'Content-Type': 'application/json' }
    }).then(({ data, status, statusText }) => {
      resolve({ data, status, statusText });
    }).catch(ex => {
      console.log('ex', ex)
      resolve({ data: null, status: 500, statusText: Message.ServiceError })
    })
  })
}
class API {
  async login(email, password) {
    const data = {
      email,
      password_token: Utils.hashString({ email, password })
    }
    const res = await POST(API_URL.LOGIN, {}, data);
    return res;
  }

  async register(email, firstName, lastName, password, referralId = '') {
    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      password_token: Utils.hashString({ email, password }),
      referral_id: referralId
    }
    return await POST(API_URL.REGISTER, {}, data);
  }

  async getUserBalance(email) {
    const url = `${API_URL.GET_BALANCE}?account=${email}`
    return await GET(url, {}, {});
  }

  async getCurrentLot() {
    return await GET(API_URL.GET_CURRENT_LOT, {}, {});
  }

  async getWinnerLot(num) {
    const url = `${API_URL.GET_WINNER_LOT}?limit=${num}`
    return await GET(url, {}, {});
  }

  async getCurLotReport() {
    return await GET(API_URL.GET_CUR_LOT_REPORT, {}, {});
  }

  async getUserActiveTicket(email, limit, page) {
    const url = `${API_URL.GET_USER_TICKET}?buyer=${email}&status=Active&limit=${limit}&page=${page}`
    return await GET(url, {}, {});
  }

  async getUserPlayedTicket(email, limit, page) {
    const url = `${API_URL.GET_USER_TICKET}?buyer=${email}&status=Played&limit=${limit}&page=${page}`
    return await GET(url, {}, {});
  }

  async getDrawing(email, limit, page) {
    const url = `${API_URL.GET_USER_TICKET}?buyer=${email}&status=Played&limit=${limit}&page=${page}`
    return await GET(url, {}, {});
  }

  async getDepositeHistory(email, limit, page) {
    const url = `${API_URL.GET_DEPOSIT}?account=${email}&limit=${limit}&page=${page}`
    return await GET(url, {}, {});
  }

  async getWithdrawHistory(email, limit, page) {
    const url = `${API_URL.GET_WITHDRAW}?account=${email}&limit=${limit}&page=${page}`
    return await GET(url, {}, {});
  }
}

export default new API()