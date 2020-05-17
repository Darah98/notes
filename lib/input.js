'use strict';
const minimist= require('minimist');


function Input(){
    const argv= minimist(process.argv.slice(2));
    if(argv.a || argv.add){
        this.action= process.argv[2];
        this.payload= argv.a || argv.add;
    } else {
        throw 'ERROR';
    }
}

module.exports= Input;