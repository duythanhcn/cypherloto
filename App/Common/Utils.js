import { Dimensions } from 'react-native'
import { widthPercentageToDP as _wp, heightPercentageToDP as _hp } from 'react-native-responsive-screen'

const { width, height } = Dimensions.get('screen')
const wBase = 375 // iPhone X
const hBase = 812 // iPhone X

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
  hashString(params) {
    // const hmac = crypto.createHmac('sha256', 'password_token');
    // hmac.update(JSON.stringify(params));
    // return hmac.digest('hex');
  }
}
export default new Utils()