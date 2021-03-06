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

  Note App USAGE: 
  +To add new note: node index.js --add <note body> || --category <category name>
  --add replacements: --a | -a
  <note body>: replace with the note between single quotes ''
  <category name>: replace with the wanted catrgory
  +To delete an existing note: node index.js --delete <note ID>
  --delete replacements: --d | -d
  <note ID>: replace with the id displayed after adding 
  OR you can use list to see the ID
  +To list notes: node index.js --list || --category <category name>
  --list replacements: --l | -l
  `);
  process.exit();
}
