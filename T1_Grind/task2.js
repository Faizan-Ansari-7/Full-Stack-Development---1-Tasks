fs = require('fs')

fs.writeFile('num.txt','20 22 34 56 12',(err) => {
    if(err) {
        throw err
    }
    console.log('File created successfully')
    fs.readFile('num.txt','utf-8',(err,data) => {
        if(err) {
            throw err
        }
        var data1 = data.split(' ')
        for(i=0; i<data1.length; i++) {
            data1[i] = parseInt(data1[i])
        }
        data1.sort((a,b) => a-b)
        var max = Math.max(...data1)
        console.log('Sorted numbers:',data1)
        fs.appendFile('num.txt','\nSorted Array :'+data1+'\nMaximum Number :'+max,(err) => {
            if(err) {
                throw err
            }
            console.log('Data appended successfully')
        })
    })
})