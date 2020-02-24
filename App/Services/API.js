import axios from 'axios';

const baseURL = 'http://95.216.25.89:3001/api/v1';
class API {
  instance = null;
  constructor() {
    instance = axios.create({
      baseURL: 'http://95.216.25.89:3001/api/v1',
      timeout: 1000,
      headers: { 'X-Custom-Header': 'foobar' }
    });
  }
  GET(url, headers, params) {
    return this.instance.get(url, {
      headers: { ...headers },
      params: { ...params }
    }).then(result => {

    }).catch(ex => {

    })
  }

  POST(url, headers, data) {
    console.log(baseURL + url)
    return new Promise((resolve, reject) => {
      axios.post(baseURL + url, data, {
        headers: { 'Content-Type': 'application/json' }
      }).then(result => {
        resolve(result);
      }).catch(ex => {
        console.log('ex', ex)
        reject(ex)
      })
    })
  }
}

export default new API()