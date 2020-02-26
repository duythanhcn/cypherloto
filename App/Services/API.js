import axios from 'axios';
import { API_URL } from '../Common/constants';
import Message from '../Common/Message';
import Utils from '../Common/Utils';

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
    return await POST(API_URL.LOGIN, {}, data);
  }

  async register(email, firstName, lastName, password, referralId = '') {
    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      password_token: Utils.hashString({ email, password }),
      referral_id: referralId
    }
    return await POST(API_URL.LOGIN, {}, data);
  }

}

export default new API()