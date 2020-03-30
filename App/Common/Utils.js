import { Dimensions, Platform } from 'react-native';
import { widthPercentageToDP as _wp, heightPercentageToDP as _hp } from 'react-native-responsive-screen';
import crypto from 'crypto';

const { width, height } = Dimensions.get('screen')
const wBase = width // iPhone X
const hBase = height // iPhone X

class Utils {
  /**
   * deDuplicateArray
   * @param {*} arr 
   */
  async deDuplicateArray(arr) {
    let result = []
    await new Promise((resolve, reject) => {
      try {
        const uniq = new Set(arr.map(e => JSON.stringify(e)));
        result = Array.from(uniq).map(e => JSON.parse(e));
        resolve()
      } catch (ex) {
        console.log('deDuplicateArray ex:', ex)
        reject()
      }
    })
    return result
  }

  /**
   * calculate width by revolution
   * @param {*} w 
   */
  wp(w) {
    const ratio = w / wBase * 100 + '%'
    return _wp(ratio)
  }

  /**
   * calculate height by revolution
   * @param {*} h 
   */
  hp(h) {
    const ratio = h / hBase * 100 + '%'
    return _hp(ratio)
  }

  /**
   * compareABS
   * absolute compare data
   * must be right in sequence and value
   * @param {any} objA 
   * @param {any} objB 
   */
  compareABS(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB)
  }

  /**
   * 
   * @param {object} params 
   */
  hashString(params, key) {
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(JSON.stringify(params));
    return hmac.digest('hex');
  }

  async randomNumberInList(num, start, end) {
    let arr = [];
    await new Promise((resolve) => {
      while (arr.length < num) {
        let r = Math.floor(Math.random() * end) + start;
        if (arr.indexOf(r) === -1) arr.push(r);
        if (arr.length == num) resolve();
      }
    });
    return arr;
  }

  usdtFormat(_value) {
    let isMillions = '';
    if (_value >= 1000000) {
      _value /= 1000000;
      isMillions = ' M';
    }
    ;
    const value = parseFloat(_value).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    const arrValue = value.split('.')
    if (parseInt(arrValue[1]) <= 0) return arrValue[0] + ' USDT';

    return value + isMillions + ' USDT';
  }
}
export default new Utils()