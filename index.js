'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const note = new Input();
const cNote = new Notes();

cNote.execute(note);
