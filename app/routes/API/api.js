
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


