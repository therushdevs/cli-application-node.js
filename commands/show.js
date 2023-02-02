const fsPromises = require('fs/promises')
const fs = require('fs')
const path = require("path")

async function show (accNo) {
    var accExist = false
    if (fs.existsSync(path.join(__dirname, 'bankdetails.json'))){
        var accDetails = JSON.parse(await fsPromises.readFile(path.join( __dirname,'bankdetails.json')))
        for (var i = 0; i < accDetails.length; i++){
            if (accDetails[i].accNo == accNo) {
                console.log(`${accDetails[i].name} ${accDetails[i].balance}`)
                accExist = true;
            }
        }
        if (!accExist) console.log(`No account exist with account number ${accNo}, \nplease create an account...`)
    }else{
        console.log(`No account exist with account number ${accNo}, \nplease create an account...`)
    }
}

module.exports = show