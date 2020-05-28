'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const note = new Input();
const cNote = new Notes();

if (note.valid(note.action)) {
  cNote.execute(note);
} else {
  info();
}

function info() {
  console.log(`
  ERR: INVALID INPUT

  Note App USAGE: node index.js -a <note body>
  -a: the action to be perfomed (replacements: --a | --add)
  <note body>: replace with the note between single quotes ''
  `);
  process.exit();
}
