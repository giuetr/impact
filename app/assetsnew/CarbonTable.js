import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, numberFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';



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
  ticker: "TSLA",
  name: "Tesla Inc.",
  price: 132,
  emissions: 123123123,
  change1d: 30,
  change1m: 1,
  change1y: 4,
  eps: 0.3,
  pe: 12.3,
  mktcap: 201023231,
  beta: 4,
}, {
  ticker: "MU",
  name: "Micron Technology",
  price: 31,
  emissions: 23123123,
  change1d: 32,
  change1m: 12,
  change1y: 43,
  eps: 0.3,
  pe: 12.3,
  mktcap: 0.1,
  beta: 3,
}, {
  ticker: "FB",
  name: "Facebook",
  price: 48,
  emissions: 4667762,
  change1d: 9,
  change1m: 18,
  change1y: -24,
  eps: 12,
  pe: 9,
  mktcap: 12391233,
  beta: 7
}
];




const columns = [{
  dataField: 'ticker',
  text: 'Ticker',
  formatter: (cell) => (
    <span className="text-inverse">
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
  sort: true,
  sortCaret
},{
  dataField: 'emissions',
  text: 'GHG Emissions',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-yellow">
        { cell }
    </span>
  ),
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




class CarbonTable extends React.Component {
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
                  fileName: 'corporate_emissions.csv',
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

export default CarbonTable;
