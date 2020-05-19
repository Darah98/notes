'use strict';
const Notes= require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Note Module', ()=>{
    it('Consoles nothing when no command is given', ()=>{
        const note= new Notes();
        note.execute();
        expect(console.log).not.toHaveBeenCalled();
    });
    it('Consoles the output when the command and its data are both valid', ()=>{
        const note= new Notes();
        note.execute({action: '--add', payload: 'note body'});
        expect(console.log).toHaveBeenCalled();
    });
});