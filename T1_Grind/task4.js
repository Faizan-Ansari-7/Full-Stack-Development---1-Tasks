fs = require('fs')

fs.mkdir('hello',(err) => {
    if(err) {
        console.log(err)
    }
    fs.writeFile('hello/a.txt','Suukeoona',(err) => {
        if(err) {
            console.log(err)
        }
        console.log('File created successfully')
        fs.appendFile('hello/a.txt','\nadded more data',(err) => {
            if(err) {
                console.log(err)
            }
            console.log('Data appended successfully')
            fs.readFile('hello/a.txt','utf-8',(err,data) => {
                if(err) {
                    console.log(err)
                }
                console.log(data)
                fs.rename('hello/a.txt','hello/b.txt',(err) => {
                    if(err) {
                        console.log(err)
                    }
                    console.log('File renamed successfully')
                    fs.unlink('hello/b.txt',(err) => {
                        if(err) {
                            console.log(err)
                        }
                        console.log('File deleted successfully')
                        fs.rmdir('hello',(err) => {
                            if(err) {
                                console.log(err)
                            }
                            console.log('Directory removed successfully')
                            console.log('All operations completed successfully')
                        })
                    })
                })
            })
        })
    })
})