const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, list, until) => {
    try {

        if( list ) {
            console.log('========================'.green);
            console.log('Table of:', colors.blue(base));
            console.log('========================'.green);
        }
            

        let output = '';
        let consoleOutput = '';

        for (let i = 1; i <= until; i++) {
            consoleOutput += `${base} ${'x'.yellow} ${i} ${'='.green} ${base * i}`;
            output += `${base} x ${i} = ${base * i}`;
            if (i != until) {
                consoleOutput += '\n'
                output += '\n'
            }
        }

        if( list ) {
            console.log(consoleOutput)
        }

        const fileName = `./output/table-${base}.txt`;

        fs.writeFileSync(fileName, output);

        return fileName
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createFile
}