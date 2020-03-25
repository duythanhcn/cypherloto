
let DATA_STORAGE = null
class DataStorage {
  CURRENT_TAB = 'Home'
  constructor() {
    if (!DATA_STORAGE) {
      DATA_STORAGE = this
    }
    return DATA_STORAGE
  }
}
export default (new DataStorage)