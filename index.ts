import * as program from 'commander';
import { spawn } from 'child_process';
import * as chalk from 'chalk';
program.version('1.0.0')
    .option('-i, --input <infile>', 'Input file')
    .option('-l, --language <lang>', 'Language')
    .option('-o, --outdir <outdir>', 'Output Directory')
    .parse(process.argv);
console
    .log(chalk
        .blue(`swagger codegen -> Spec File: ${program.input}, Language: ${program.language}, Outdir: ${program.outdir}`));

const child = spawn('java', [
    '-jar',
    `${process.cwd()}/jar/swagger-codegen-cli-2.4.12.jar`,
    'generate',
    '-i',
    program.input,
    '-l',
    program.language,
    '-o',
    program.outdir
], {
    stdio: "inherit"
});
