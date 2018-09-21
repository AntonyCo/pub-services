var pubs = require('../mocks/pubs.json');
var moment = require('moment');
var _ = require('lodash');

function findAll(){
    return pubs;
};

function findAllOpened(){
    var today = moment().format('dddd');
    var pubArray = findAll();
    var pubOpenedToday = [];

    for (var i = 0; i < pubArray.length; i++) {
        if(_.includes(pubArray[i].openDays, today)){
            pubOpenedToday[pubOpenedToday.length] = pubArray[i];
        }
      }
      return pubOpenedToday;
}

module.exports = {
    findAll: findAll,
    findAllOpened: findAllOpened
}