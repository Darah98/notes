'use strict';
const minimist = require('minimist');

class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    if (argv.a || argv.add) {
      this.action = process.argv[2];
      this.payload = argv.a || argv.add;
    } else {
      throw 'ERROR';
    }
  }
  valid(action) {
    const key= /(?!>\w)-a(?!\w)|(?!>\w)--add(?!\w)/;
    if (key.test(action)) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Input;
