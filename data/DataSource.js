export default class DataSource {
  static get shared() {
    if (DataSource.instance == null || DataSource.instance === undefined) {
      DataSource.instance = new DataSource()
    }
    return DataSource.instance
  }
  
  constructor() {
    this.globalState = "Get global state success"
  }

}