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
        .description('This command used to CREATE an account in kelp-bank')
        .action(create)

commander.program
        .command('DEPOSIT <accNo> <amount>')
        .alias('deposit')
        .description('This command used to DEPOSIT amount to kelp-bank account')
        .action(deposite)

commander.program
        .command('WITHDRAW <accNo> <amount>')
        .alias('withdraw')
        .description('This command used to WITHDRAW amount from kelp-bank account')
        .action(withdraw)

commander.program
        .command('BALANCE <accNo> [accName]')
        .alias('balance')
        .description('This command used to check BALANCE in kelp-bank account')
        .action(show)

commander.program.parse()
