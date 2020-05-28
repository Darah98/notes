'use strict';
require('@code-fellows/supergoose');
const noteIns = require('../lib/model/notes-collection.js');

describe('noteIns', () => {
  it('creates() a new note obj', () => {
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
});
