import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, numberFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

//react BootstrapTable (tablenext)


import {
  Container,
  Row,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardHeader,
  CardFooter,
  CardColumns,
  Col,
  Badge
} from '../components'

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;


const sortCaret = (order) => {
  if (!order)
      return <i className="fa fa-fw fa-sort text-muted"></i>;
  if (order)
      return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
};


var products = [{
  id: 1,
  ticker: "TSLA",
  name: "Tesla Inc.",
  price: 120,
  esgscore: 30,
  rating: 'Top',
  change1d: 22,
  change1m: 21,
  change1y: 32,
  eps: 3,
  pe: 1,
  mktcap: 324124,
  beta: 2
}, {
  id: 2,
  ticker: "NIO",
  name: "Nio Inc.",
  price: 11,
  esgscore: 43,
  rating: 'Good',
  change1d: 32,
  change1m: 12,
  change1y: 43,
  eps: 6,
  pe: 21,
  mktcap: 959934,
  beta: 5
}, {
  id: 3,
  ticker: "MU",
  name: "Micron Technology Inc.",
  price: 54,
  esgscore: 12,
  rating: 'Top',
  change1d: 21,
  change1m: 11,
  change1y: -12,
  eps: 7,
  pe: 1,
  mktcap: 988423,
  beta: 4
}, {
  id: 4,
  ticker: "AMD",
  name: "Advanced Micro Devices, Inc.",
  price: 32,
  esgscore: 33,
  rating: 'Average',
  change1d: -2,
  change1m: -32,
  change1y: 24,
  eps: 10,
  pe: 22,
  mktcap: 4828323,
  beta: 0.3
},];




const columns = [{
  dataField: 'ticker',
  text: 'Ticker',
  formatter: (cell) => (
    <span className="text-inverse fw-500">
        { cell }
    </span>
  ),
},  {
  dataField: 'name',
  text: 'Company',
  formatter: (cell) => (
    <span className="text-inverse">
        { cell }
    </span>
  ),
}, {
  dataField: 'price',
  text: 'Price',
  formatter: (cell) => (
    <span className="text-info">
        { cell }
    </span>
  ),
}, {
  dataField: 'esgscore',
  text: 'ESG Score',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-info">
        { cell }
    </span>
  )
}, {
  dataField: 'rating',
  text: 'ESG Performance',
  formatter: (cell) => {
    const color = (status) => {
        const map = {
            'Top': 'success',
            'Good': 'info',
            'Average': 'warning',
            'Insufficient': 'danger'
        };
        return map[status];
    }

    return (
        <Badge color={ color(cell) }>
            { cell }
        </Badge>
    );
}
}, {
  dataField: 'change1d',
  text: '1D Change',
  sort: true,
  sortCaret,
  style: (cell, row, rowIndex, colIndex) => {
    if (cell > 0) {
      return {
        color: '#33AE9A'
      };
    }
    return {
       color: '#ED1C24'
    };
  },
  formatter: (cell) => (
    <span>
        { cell } %
    </span>
  )
}, {
  dataField: 'change1m',
  text: '1M Change',
  sort: true,
  sortCaret,
  style: (cell, row, rowIndex, colIndex) => {
    if (cell > 0) {
      return {
        color: '#33AE9A'
      };
    }
    return {
       color: '#ED1C24'
    };
  },
  formatter: (cell) => (
    <span>
        { cell } %
    </span>
  )
},  {
  dataField: 'change1y',
  text: '1Y Change',
  sort: true,
  sortCaret,
  style: (cell, row, rowIndex, colIndex) => {
    if (cell > 0) {
      return {
        color: '#33AE9A'
      };
    }
    return {
       color: '#ED1C24'
    };
  },
  formatter: (cell) => (
    <span>
        { cell } %
    </span>
  )
},  {
  dataField: 'eps',
  text: 'EPS',
  sort: true,
  sortCaret
},  {
  dataField: 'pe',
  text: 'P/E',
  sort: true,
  sortCaret
},  {
  dataField: 'mktcap',
  text: 'MarketCap',
  sort: true,
  sortCaret
},  {
  dataField: 'beta',
  text: 'Beta',
  sort: true,
  sortCaret
}
];




class Tablestock extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      
    };
  }

  render() {
    return (
      
      <Container>
        <div>
          <Card>
            <CardBody>
            <ToolkitProvider
                keyField="id"
                data={ products }
                columns={columns}
                filter={ filterFactory() }
                search
                exportCSV={ {
                  fileName: 'companies_export.csv',
                  separator: ',',
                  noAutoBOM: false
                } }
              >
                {
                  props => (
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                      <SearchBar {...props.searchProps}
                        placeholder="Search..."
                      />
                      <ExportCSVButton { ...props.csvProps } className="p-0">
                        <Button color="info" outline>
                          <i className="fa fa-download mr-2"></i>
                                Export
                        </Button>
                      </ExportCSVButton>
                      </div>
                      <BootstrapTable
                        { ...props.baseProps }
                        classes="table-responsive-lg"
                        bordered={ false }
                        responsive
                        pagination={ paginationFactory() }
                      />
                      <br />
                    </div>
                  )
                }
              </ToolkitProvider>
            </CardBody>
          </Card>
        </div>
      </Container>
      
    );
  }
}

export default Tablestock;
