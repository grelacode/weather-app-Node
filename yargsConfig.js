const argv = require('yargs').options({
    adress: {
        alias: 'd',
        desc: 'city adress to check the weather',
        demand: true
    }
}).argv;


module.exports = {
    argv
}