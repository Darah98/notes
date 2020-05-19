'use strict';
const minimist = require('minimist');

class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    if (argv.a || argv.add) {
      this.action = this.valid(process.argv[2]);
      this.payload = argv.a || argv.add;
    } else {
      throw 'ERROR';
    }
  }
  valid(method) {
    if(method === '-a' || '--a' || '--add') {true}
    else{false}
}
}
module.exports = Input;
