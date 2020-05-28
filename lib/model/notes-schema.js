'use strict';
const mongoose = require('mongoose');

const noteModel = new mongoose.Schema({
  payload: { type: 'string', required: true },
  category: { type: 'string', required: true },
});

module.exports= mongoose.model('noteModel', noteModel);