
const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

require('colors');

console.clear();

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

const { base, list, until } = argv;

createFile(base, list, until)
    .then( fileName => console.log(fileName.rainbow, 'created!') )
    .catch( console.error )

