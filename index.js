#! /usr/bin/env node

const commander   = require("commander")
const create = require("./commands/create.js")
const withdraw = require("./commands/withdraw.js")
const deposite = require("./commands/deposit.js")
const show = require("./commands/show.js")
const fsPromises = require('fs/promises')
const path = require("path")

commander.program
        .command('CREATE <ACCNO> <ACCNAME>')
        .alias('create')
        .description('This command used to create account in kelp-bank')
        .action(create)

commander.program
        .command('DEPOSIT <accNo> <amount>')
        .alias('deposit')
        .description('This command used to create account in kelp-bank')
        .action(deposite)

commander.program
        .command('WITHDRAW <accNo> <amount>')
        .alias('withdraw')
        .description('This command used to create account in kelp-bank')
        .action(withdraw)

commander.program
        .command('BALANCE <accNo> [accName]')
        .alias('balance')
        .description('This command used to create account in kelp-bank')
        .action(show)

commander.program.parse()
