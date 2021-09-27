const express = require('express');
const app = express();

const cors = require('cors')
const NSEAPI = require('./API');
const process = require('process');
const PORT = process.env.PORT || 5000 ;



app.get('/market_status', (req, res) => {
NSEAPI.getMarketStatus().then((response) => {
  res.json(response.data);
})
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
      })
});

app.get('/indices_info', (req, res) => {
  NSEAPI.getIndices()
      .then(function (response) {
        res.json(response.data);
      })
});

app.listen(PORT, () => {
    console.log('Edukuthu at 5000')
})
