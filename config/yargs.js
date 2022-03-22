const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base of the multiplying table.'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Shows the multiplying table on console.'
    })
    .option('u', {
        alias:'until',
        type: 'number',
        default: 10,
        describe: 'until what number you want your multiplying table. '
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'base shall be a number'
        if (typeof argv.l != 'boolean') throw 'list shall be a boolean'
        return true
    })
    .argv;

module.exports = argv;