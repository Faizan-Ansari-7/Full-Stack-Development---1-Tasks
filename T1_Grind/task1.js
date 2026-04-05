fs = require('fs')

fs.writeFile('help.txt','You are creating file',(err) => {
    if(err) {
        throw err
    }
    console.log('File created successfully')
    fs.appendFile('help.txt','\nyou are appending data',(err) => {
        if(err) {
            throw err
        }
        console.log('Data appended successfully')
        fs.readFile('help.txt','utf-8',(err,data) => {
            if(err) {
                throw err
            }
            console.log('File content:',data)
            console.log("Thanks for using my program")
        })
    })
})