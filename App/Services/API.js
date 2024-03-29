import axios from 'axios';
import { API_URL } from '../Common/constants';
import Message from '../Common/Message';
import Utils from '../Common/Utils';
import FireBase from './Firebase';

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
      password_token: password,
      device_token: FireBase.fcmToken
    }
    const res = await POST(API_URL.LOGIN, {}, data);
    return res;
  }

  async register(email, firstName, lastName, password, referralId = '') {
    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      password_token: Utils.hashString({ email, password }, 'password_token'),
      referral_id: referralId,
      device_token: FireBase.fcmToken
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

  async getDrawing(limit, page) {
    const url = `${API_URL.GET_DRAWING}?limit=${limit}&page=${page}`
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

  async doWithdraw(account, amount, address_to) {
    const data = {
      account,
      amount,
      address_to
    };
    const signature = Utils.hashString(data, '2WYDN0b9igPimkW');
    return await POST(API_URL.WITHDRAW, { signature: signature }, data);
  }

  async buyTicket(user, amount, tickets) {
    const data = {
      user,
      amount,
      tickets
    }
    const signature = Utils.hashString(data, '2WYDN0b9igPimkW');
    return await POST(API_URL.BUY, { signature: signature }, data);
  }

  async verifyQR(account, password, token) {
    const data = {
      account,
      password_token: password,
      token
    }
    const res = await POST(API_URL.VERIFY_QR, {}, data);
    return res;
  }

  async createQR(account, password) {
    const data = {
      account,
      password_token: password
    }
    const res = await POST(API_URL.CREATE_QR, {}, data);
    return res;
  }

  async enable2FA(account, password, token) {
    const data = {
      account,
      password_token: Utils.hashString({ email: account, password }, 'password_token'),
      token
    }
    const res = await POST(API_URL.ENABLE_2FA, {}, data);
    return res;
  }

  async disable2FA(account, password, token) {
    const data = {
      account,
      password_token: Utils.hashString({ email: account, password }, 'password_token'),
      token
    }
    const res = await POST(API_URL.DISABLE_2FA, {}, data);
    return res;
  }

  async changePassword(email, oldPassword, newPassword) {
    const data = {
      email,
      old_password_token: Utils.hashString({ email, password: oldPassword }, 'password_token'),
      new_password_token: Utils.hashString({ email, password: newPassword }, 'password_token')
    }
    const res = await POST(API_URL.CHANGE_PASSWORD, {}, data);
    return res;
  }

  async forgotPassword(email) {
    const url = `${API_URL.FORGOT_PASSWORD}?account=${email}`
    return await GET(url, {}, {});
  }

  async searchLot(date) {
    const url = `${API_URL.SEARCH}?date=${date}`
    return await GET(url, {}, {});
  }

  async verifyAddress(hash) {
    const data = {
      hash,
      currency: 'USDT'
    }
    return new Promise((resolve, reject) => {
      axios.post('http://95.216.25.89:9001/validate_address', data, {
        headers: { 'Content-Type': 'application/json' }
      }).then(({ data, status, statusText }) => {
        resolve({ data, status, statusText });
      }).catch(ex => {
        console.log('ex', ex)
        resolve({ data: null, status: 500, statusText: Message.ServiceError })
      })
    })
  }

  async getBalanceHistory(email, limit, page) {
    const url = `${API_URL.GET_BALANCE_HISTORY}?account=${email}&limit=${limit}&page=${page}`
    return await GET(url, {}, {});
  }
}

export default new API()