var axios = require('axios');


 function getMarketStatus() {
  return axios.get('https://www1.nseindia.com//emerge/homepage/smeNormalMktStatus.json', {
   function (data) {
      return {
        
        status: console.log(data).NormalMktStatus
      };
    }
  });
}
 async function getIndices() {
 const request = await axios.get('https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json' , headers: {
      Referer: 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=' + encodeURIComponent(symbol),
      'X-Requested-With': 'XMLHttpRequest'
    });
 return request;
}


function getQuoteInfo(symbol) {
  return axios.get('https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?series=EQ&symbol=' + encodeURIComponent(symbol), {
    headers: {
      Referer: 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=' + encodeURIComponent(symbol),
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
}


var NSEAPI = {
  getMarketStatus,
  getIndices,
  getQuoteInfo,
 
};

module.exports = NSEAPI;
