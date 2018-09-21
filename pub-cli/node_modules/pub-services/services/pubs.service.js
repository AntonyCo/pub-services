const pubs = require('../mocks/pubs.json');
const moment = require('moment');
const {includes: _i} = require('lodash');

function findAll(){
    return pubs;
};

function findAllOpened(){
    const today = moment().format('dddd');
    const pubArray = findAll();
    return pubArray.filter(pub => _i(pub.openDays, today));
}

module.exports = {
    findAll,
    findAllOpened
}