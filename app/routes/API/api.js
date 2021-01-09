
export async function getFinancialData(ticker) {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const url = PROXY_URL + `https://query2.finance.yahoo.com/v10/finance/quoteSummary/`+ticker+`?modules=financialData`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getQuote(ticker) {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const url = PROXY_URL + `https://query1.finance.yahoo.com/v7/finance/quote?symbols=`+ticker;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// single stock calls

export async function getSummaryDetail(ticker) {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const url = PROXY_URL + `https://query2.finance.yahoo.com/v10/finance/quoteSummary/`+ticker+`?modules=summaryDetail`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getProfile(ticker) {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const url = PROXY_URL + `https://query2.finance.yahoo.com/v10/finance/quoteSummary/`+ticker+`?modules=assetProfile`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export async function getStats(ticker) {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const url = PROXY_URL + `https://query2.finance.yahoo.com/v10/finance/quoteSummary/`+ticker+`?modules=defaultKeyStatistics`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// most active and trending securities of the day
export async function getTrending(ticker) {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const url = PROXY_URL + `https://query1.finance.yahoo.com/v1/finance/trending/US?lang=en-US&region=US&count=5&corsDomain=finance.yahoo.com`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};


