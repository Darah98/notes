'use strict';
// const mongoose = require('mongoose');
const {v4:uuidv4}= require('uuid');
const notes= require('./model/notes-schema.js');
// console.log(notes.schema);
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
    // console.log(ent);
    // const Result = {};
    // let noteID = 0;
    // Result.id = noteID;
    // Result.action = ent.action;
    // Result.text = ent.payload;
    // noteID++;
    ent.id= uuidv4();
    // console.log(ent);
    const NN= new notes(ent);
    // console.log('------------->',NN.schema);
    const saved= await NN.save();
    console.log('Adding Note:', saved);
  }
  delete(){

  }
}

module.exports = Notes;
