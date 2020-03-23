import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  async setLoginSession(login) {
    try {
      await AsyncStorage.setItem('@loginSession', JSON.stringify(login))
    } catch (e) {
      console.log('setLoginSession fail', e)
    }
  }

  async getLoginSession() {
    try {
      const value = await AsyncStorage.getItem('@loginSession');
      return value;
    } catch (e) {
      console.log('getLoginSession fail', e)
    }
  }
}

export default new Storage();