import fetch from 'isomorphic-fetch';

const SEARCH_URI = 'http://d.yimg.com/autoc.finance.yahoo.com/autoc';


export function makeAndHandleRequest2(query) {
    return fetch(`${SEARCH_URI}?query=${query}&region=1&lang=en&callback=YAHOO.Finance.SymbolSuggest.ssCallback`)
        .then((resp) => resp.json())
        .then(({items}) => {
            const options = items.map((i) => ({
                symbol: i.symbol,
                name: i.name,
                exch: i.exch,
            }));
            return {options};
        });
}
