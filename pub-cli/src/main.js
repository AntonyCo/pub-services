var pubService = require('pub-services').services.pubService;

module.exports = {
    findAll: pubService.findAll,
    findAllOpened: pubService.findAllOpened
}