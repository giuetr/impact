
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

// chart
export async function getChart(ticker) {
    const PROXY_URL = 'https://q-proxy.herokuapp.com/';
    const url = PROXY_URL + 'https://query1.finance.yahoo.com/v8/finance/chart/MSFT?symbol='+ticker+'&period1=0&period2=9999999999&interval=1d';
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

