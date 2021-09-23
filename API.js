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

function getIndices() {
  return axios.get('https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json');
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
  getMarketStatus: getMarketStatus,
  getIndices: getIndices,
  getQuoteInfo: getQuoteInfo,
 
};

module.exports = NSEAPI;
