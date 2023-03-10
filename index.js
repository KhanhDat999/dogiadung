const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001;
const productModel = require('./connectDb.js');


app.use(cors());

app.use((req, res, next) => {
  console.log('abc')
  next()
})
app.get('/api/home', (req, res) => {
  productModel.find({
  })
    .then((data) => {
      res.status(200).json({
        status: 'succes',
        data
      })
    })
    .catch((data) => {
      console.log(data)
    })
})
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'succes'
  })
})
app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})