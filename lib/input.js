'use strict';
const minimist = require('minimist');

class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    const list = /(?!>\w)-l(?!\w)|(?!>\w)--list(?!\w)/;
    if (argv.a || argv.add || argv.d || argv.delete) {
      this.action = process.argv[2];
      this.payload = argv.a || argv.add || argv.d || argv.delete;
      this.category = argv.category;
    } else if (list.test(process.argv[2])) {
      if (process.argv[3]) {
        this.action = process.argv[2];
        this.category = process.argv[3];
      } else {
        this.action = process.argv[2];
      }
    } else {
      throw 'ERROR';
    }
  }
  valid(action) {
    const key = /(?!>\w)-a(?!\w)|(?!>\w)--add(?!\w)|(?!>\w)-d(?!\w)|(?!>\w)--delete(?!\w)|(?!>\w)-l(?!\w)|(?!>\w)--list(?!\w)/;
    if (key.test(action)) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Input;
