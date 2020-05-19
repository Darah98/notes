'use strict';

const Input= require('./lib/input.js');
const Notes= require('./lib/notes.js');

const note= new Input();
const cNote= new Notes();

cNote.execute(note);