#!/usr/bin/env node
const program = require('commander');
const {findAll, findAllOpened} = require('../src/main');

program
.version('1.0.0')
.option('-l, --list', 'Get the pubs list')
.option('-o, --opened', 'Ge the opened pubs list')
.parse(process.argv);

if (program.list) {
    console.log('-------------------- List all pubs --------------------');
    console.log(findAll());
    
}if(program.opened){
    console.log('-------------------- List all opened pubs --------------------');
    console.log(findAllOpened());
}