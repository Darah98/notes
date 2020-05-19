'use strict';
const Input= require('./input.js');

const Notes = {};

Notes.execute = function (ent) {
  if (ent) {
    this.add(ent);
  } else{
      throw 'ERROR';
  }
};

Notes.add = function (ent) {
  const Result = {};
  let noteID = 0;
  Result.id = noteID;
  Result.text = ent.payload;
  console.log('Adding Note:', Result.text);
  noteID++;
};

module.exports = Notes;
