'use strict';
const mongoose = require('mongoose');
const noteIns = require('./model/notes-collection.js');
class Notes {
  constructor() {}
  execute(ent) {
    if (ent === undefined) {
      return;
    } else if (ent.action && ent.payload) {
      const aAction = /(?!>\w)-a(?!\w)|(?!>\w)--add(?!\w)/;
      const dAction = /(?!>\w)-d(?!\w)|(?!>\w)--delete(?!\w)/;
      if (aAction.test(ent.action)) {
        try {
          noteIns.create(ent).then(mongoose.disconnect);
        } catch (err) {
          console.error(err);
        }
      } else if (dAction.test(ent.action)) {
        try {
          noteIns.delete(ent);
        } catch (err) {
          console.error(err);
        }
      }
    } else if (/(?!>\w)-l(?!\w)|(?!>\w)--list(?!\w)/.test(ent.action)) {
      try {
        noteIns.read(ent).then(mongoose.disconnect);
      } catch (err) {
        console.error(err);
      }
    } else {
      throw 'ERROR';
    }
  }
}

module.exports = Notes;
