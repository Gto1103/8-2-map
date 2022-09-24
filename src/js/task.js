export default class ErrorRepository {
  constructor() {
    this.errorsContainer = new Map();
  }

  translate(code) {
    if (this.errorsContainer.has(code)) {
      return this.errorsContainer.get(code);
    }
    return 'Unknown error!';
  }
}
