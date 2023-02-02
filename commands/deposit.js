const fsPromises = require('fs/promises')
const fs = require('fs')
const path = require("path")

async function deposit(accNo, amount) {

    var accExist = false
    if (fs.existsSync(path.join(__dirname, 'bankdetails.json'))) {
        var accDetails = JSON.parse(await fsPromises.readFile(path.join(__dirname, 'bankdetails.json')))
        for (var i = 0; i < accDetails.length; i++) {
            if (accDetails[i].accNo == accNo) {
                accDetails[i].balance += (Number)(amount)
                await fsPromises.writeFile(path.join(__dirname, 'bankdetails.json'), JSON.stringify(accDetails), 'utf8')
                    // .then(() => {
                    //     console.log(`Successfully deposited the amount on acc no. ${accNo}`)
                    // })
                    .catch((error) => {
                        console.error(error.message)
                    })
                accExist = true;
                break;
            }
        }
        if (!accExist) console.log(`No account exist with account number ${accNo}, \nplease create an account...`)

    } else {
        console.log(`No account exist with account number ${accNo}, \nplease create an account...`)
    }
}

module.exports = deposit