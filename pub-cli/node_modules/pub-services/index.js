var pubService = require('./services/pubs.service');

module.exports = {
    services: {
        pubService : pubService
    }
}
/*
pubService.findAll();
console.log('Number of Pub opened today ', pubService.findAllOpened().length);
console.log(pubService.findAllOpened());*/