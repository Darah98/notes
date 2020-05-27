'use strict';
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const notes = require('./model/notes-schema.js');
class Notes {
  constructor() {}
  execute(ent) {
    if (ent === undefined) {
      return;
    } else if (ent.action && ent.payload) {
      const aAction = /(?!>\w)-a(?!\w)|(?!>\w)--add(?!\w)/;
      const dAction = /(?!>\w)-d(?!\w)|(?!>\w)--delete(?!\w)/;
      if (aAction.test(ent.action)) {
        this.add(ent);
      } else if (dAction.test(ent.action)) {
        this.delete(ent);
      }
    } else if (/(?!>\w)-l(?!\w)|(?!>\w)--list(?!\w)/.test(ent.action)) {
      this.list(ent);
    } else {
      throw 'ERROR';
    }
  }
  async add(ent) {
    ent.id = uuidv4();
    const NN = new notes(ent);
    const saved = await NN.save();
    console.log('Adding Note:', saved);
    //  mongoose.disconnect;
  }
  delete(ent) {
    const objID = ent.payload;
    notes
      .findByIdAndDelete(objID, () => {
        console.log('Deleted note with id:', objID);
      })
      .then(mongoose.disconnect);
  }
  async list(ent) {
    if(ent.category){
      const catNotes= await notes.find({category:ent.category});
      console.log(catNotes);
    } else {
      const allNotes = await notes.find({});
      console.log(allNotes);
    }
    // mongoose.disconnect;
  }
}

module.exports = Notes;
