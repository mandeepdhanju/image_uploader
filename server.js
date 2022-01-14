const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'images/' })
const fs = require ('fs')

const app = express()

app.get("/", (req, res) => {

  res.send("🤗")
})

app.get('/images/:imageName', (req, res) => {
    // do a bunch of if statements to make sure the user is 
    // authorized to view this image, then
  
    const imageName = req.params.imageName
    const readStream = fs.createReadStream(`images/${imageName}`)
    readStream.pipe(res)
  })

const port = process.env.PORT || 8080

app.listen(8080, () => console.log("listening on port 8080"))