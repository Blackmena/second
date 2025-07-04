const express = require("express")
const path = require("path")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const Mongodb_url = process.env.Mongodb_url

console.log(Mongodb_url);

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
})
app.listen(PORT, () => {
    console.log('${POrt} is running');
})