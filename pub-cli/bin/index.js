#!/usr/bin/env node
var program = require('commander');

program
.version('1.0.0')
.option('-l, --list', 'Get the pubs list')
.option('-o, --opened', 'Ge the opened pubs list')
.parse(process.argv);

if (program.list) {
    console.log('-------------------- List all pubs --------------------');
    console.log(require('../src/main').findAll());
    
}if(program.opened){
    console.log('-------------------- List all opened pubs --------------------');
    console.log(require('../src/main').findAllOpened());
}