import * as program from 'commander';
import {closeSchemaToString, openSchemaRoot} from "./nodes/node-functions";

program.version('1.0.0')
    .option('-i, --input <infile>', 'Input file')
    .parse(process.argv);
console.log(`Program args: ${program.args}, Parse result: ${program.input}`);
console.log(closeSchemaToString(openSchemaRoot()));
