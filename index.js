const express = require('express');
const app = express();

const cors = require('cors')
const NSEAPI = require('./API');
const process = require('process');
const PORT = process.env.PORT || 5000 ;


process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});
app.get('/market_status', (req, res) => {
NSEAPI.getMarketStatus().then((response) => {
  res.json(response.data);
}); 
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.use(
  cors({
    origin:"*"
  })
)


app.get('/stocks_info', (req, res) => {
  NSEAPI.getQuoteInfo(req.query.companyName)
      .then(function (response) {
        res.json(response.data);
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);})
});

app.get('/indices_info', (req, res) => {
  NSEAPI.getIndices()
      .then(function (response) {
        res.json(response.data);
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);})
});

app.listen(PORT, () => {
    console.log('Edukuthu at 5000')
})
