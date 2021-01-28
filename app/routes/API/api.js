
export async function getFinancialData(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://query2.finance.yahoo.com/v10/finance/quoteSummary/`+ticker+`?modules=financialData`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getQuote(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://query1.finance.yahoo.com/v7/finance/quote?symbols=`+ticker;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// US Sectors
export async function getSectors(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://query1.finance.yahoo.com/v7/finance/quote?symbols=XLY,XLRE,XLU,XLK,XLP,XLV,XLC,XLF,XLE,XLI,XLB`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// FInnhub API sandbox
export async function getMktnews(ticker) {
    const url = `https://finnhub.io/api/v1/news?category=general&token=bv21cgf48v6o5ed6o1ng`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};



// Finnhub Sentiment Stock
export async function getSent(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://finnhub.io/api/v1/news-sentiment?symbol=`+ticker+`&token=bv21cgf48v6o5ed6o1ng`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// single stock calls

export async function getSummaryDetail(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://query2.finance.yahoo.com/v10/finance/quoteSummary/`+ticker+`?modules=summaryDetail`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getProfile(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://query2.finance.yahoo.com/v10/finance/quoteSummary/`+ticker+`?modules=assetProfile`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getStats(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://query2.finance.yahoo.com/v10/finance/quoteSummary/`+ticker+`?modules=defaultKeyStatistics`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// chart
export async function getChart(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + 'https://query1.finance.yahoo.com/v8/finance/chart/?symbol='+ticker+'&period1=1545431999&period2=1608561000&interval=1d';
    const response = await fetch(url);
    const data = await response.json();
    return data;
};


// peers given a ticker
export async function getPeers(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://query1.finance.yahoo.com/v6/finance/recommendationsbysymbol/`+ticker;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// most active and trending securities of the day
export async function getTrending(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + `https://query1.finance.yahoo.com/v1/finance/trending/US?lang=en-US&region=US&count=5&corsDomain=finance.yahoo.com`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// ticker-targeted news
export async function getNews(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + 'https://api.rss2json.com/v1/api.json?rss_url=http://feeds.finance.yahoo.com/rss/2.0/headline?s='+ticker+'&region=US&lang=en-US';
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// all API stocks (add more endpoints for ETFs and Mutual Funds)
export async function getAll(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + 'https://query2.finance.yahoo.com/v10/finance/quoteSummary/'+ticker+'?modules=assetProfile,defaultKeyStatistics,earnings,earningsHistory,earningsTrend,esgScores,financialData,incomeStatementHistory,insiderHolders,insiderTransactions,institutionOwnership,majorHoldersBreakdown,netSharePurchaseActivity,price,recommendationTrend,secFilings,summaryDetail,summaryProfile,upgradeDowngradeHistory,quoteType,calendarEvents';
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getAllESG(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url =  'https://qvan1.herokuapp.com/ESG';
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getESG(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url =  'https://qvan1.herokuapp.com/ESG/'+ticker;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};


// economic calendar
export async function getEcon(ticker) {
    const url = `https://finnhub.io/api/v1/calendar/economic?token=bv21cgf48v6o5ed6o1ng`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
