'use strict';
// const mongoose = require('mongoose');
const Note= require('./model/notes-schema.js');
class Notes {
  constructor() {

  }
  execute(ent) {
    // console.log(ent);
    if (ent=== undefined) {
      return;
    } else if (ent.action && ent.payload) {
      this.add(ent);
    } else {
      throw 'ERROR';
    }
  }
  async add(ent) {
    const Result = {};
    let noteID = 0;
    Result.id = noteID;
    Result.action = ent.action;
    Result.text = ent.payload;
    noteID++;
    const NN= new Note(ent);
    const saved= await NN.save();
    console.log('Adding Note:', saved);
  }
  delete(){

  }
}

module.exports = Notes;
