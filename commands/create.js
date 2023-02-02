const fsPromises = require('fs/promises')
const fs = require('fs')
const path = require("path")

async function create (accNo, accName) {
    // console.log(`Account details: ${accNo} ${accName}`)

    var accExist = false;
    var accDetails = [];
    const newAccount = {
        accNo: accNo,
        name: accName,
        balance: 0
    }
    // console.log(newAccount.name)

    if (fs.existsSync(path.join(__dirname, 'bankdetails.json'))){
        // If data exist already:
        accDetails = JSON.parse(await fsPromises.readFile(path.join( __dirname,'bankdetails.json')))
        for (var i = 0; i < accDetails.length; i++){
            if (accDetails[i].accNo == accNo) {
                accExist = true;
                console.log(`Account number ${accNo} already exist in the DB`)
                break;
            }
        }
    }

    if (!accExist){
        accDetails.push(newAccount)
        await fsPromises.writeFile(path.join( __dirname,'bankdetails.json'), JSON.stringify(accDetails), 'utf8')
        // .then(()=>{
        //     console.log('Data added successfully.')
        // })
        .catch((error)=>{
            console.error(error.message)
        })
    }
    
    
}

module.exports = create