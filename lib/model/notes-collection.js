'use strict';
const mongoose = require('mongoose');
const noteModel = require('./notes-schema.js');
class Note {
  constructor() {}
  async create(ent) {
    const newNote = new noteModel(ent);
    const saved = await newNote.save();
    console.log('Note Added: ', saved);
  }
  async read(ent) {
    if (ent.category) {
      const catNotes = await noteModel.find({ category: ent.category });
      console.log(catNotes);
    } else {
      const allNotes = await noteModel.find({});
      console.log(allNotes);
    }
  }
  delete(ent) {
    const entID = ent.payload;
    noteModel
      .findByIdAndDelete(entID, () => {
        console.log('Note Deleted, ID: ', entID);
      })
      .then(mongoose.disconnect);
  }
}
module.exports = new Note();
