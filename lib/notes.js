'use strict';
// const Input = require('./input.js');

class Notes {
  constructor() {}
  execute(ent) {
    if (ent=== undefined) {
      return;
    } else if (ent.action && ent.payload) {
      this.add(ent);
    } else {
      throw 'ERROR';
    }
  }
  add(ent) {
    const Result = {};
    let noteID = 0;
    Result.id = noteID;
    Result.action = ent.action;
    Result.text = ent.payload;
    noteID++;
    console.log('Adding Note:', Result.text);
  }
}

module.exports = Notes;
