'use strict';
require('@code-fellows/supergoose');
const noteIns = require('../lib/model/notes-collection.js');
describe('noteIns', () => {
  it('creates a new note object', () => {
    const newNote = {
      action: '--add',
      payload: 'important note',
      category: 'important',
    };
    noteIns.create(newNote).then((created) => {
      Object.keys(created).forEach((key) => {
        expect(created[key]).toContain('_id');
      });
    });
  });
  it('reads what is in the database', () => {
    const newNote = {
      action: '--add',
      payload: 'important note',
      category: 'important',
    };
    const lAction = {
      action: '--list',
      category: 'important',
    };
    noteIns.create(newNote).then((listArr) => {
      noteIns.read(lAction);
      expect(listArr.length).toBeTruthy;
    });
  });
});
