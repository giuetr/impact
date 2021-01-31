import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, numberFilter} from 'react-bootstrap-table2-filter';
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
  id: 1,
  ticker: "TSLA",
  name: "Tesla Inc.",
  purchases: 120,
  sales: 30,
  totbought: 200000,
  totsold: 103012,
  lsratio: 0.3,
  returnperiod: 12.3,
  return1y: 0.1,
},{
  id: 2,
  ticker: "AAPL",
  name: "Apple Inc.",
  purchases: 312,
  sales: 555,
  totbought: 2000123,
  totsold: 65003,
  lsratio: 1,
  returnperiod: 10.3,
  return1y: 0.3,
},{
  id: 3,
  ticker: "NVDA",
  name: "Nvidia Corp.",
  purchases: 11,
  sales: 90,
  totbought: 12412,
  totsold: 9000,
  lsratio: 3,
  returnperiod: 20.3,
  return1y: 0.9,
},{
  id: 4,
  ticker: "MU",
  name: "Micron Technology",
  purchases: 101,
  sales: 25,
  totbought: 899,
  totsold: 7332,
  lsratio: 10.4,
  returnperiod: 9.3,
  return1y: 0.5,
},{
  id: 5,
  ticker: "JNJ",
  name: "Johnson and Johnson",
  purchases: 88,
  sales: 61,
  totbought: 2831723,
  totsold: 293123,
  lsratio: 9,
  returnperiod: 3,
  return1y: 0.7,
}];




const columns = [{
  dataField: 'id',
  text: 'Id'
}, {
  dataField: 'ticker',
  text: 'Ticker',
  formatter: (cell) => (
    <span className="text-inverse">
        { cell }
    </span>
  ),
},  {
  dataField: 'name',
  text: 'Company'
}, {
  dataField: 'purchases',
  text: 'Trades Long',
  sort: true,
  sortCaret
}, {
  dataField: 'sales',
  text: 'Trades Shorts',
  sort: true,
  sortCaret
}, {
  dataField: 'totbought',
  text: 'Shares Long',
  formatter: (cell) => (
    <span className="text-info">
        { cell }
    </span>
  ),
}, {
  dataField: 'totsold',
  text: 'Shares Short',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-danger">
        { cell }
    </span>
  ),
}, {
  dataField: 'lsratio',
  text: 'L/S Ratio',
  sort: true,
  sortCaret,
  formatter: (cell) => {
    const color = (cell) => {
      const color = cell = 1 ? 'text-success' : 'text-danger';
      return { color };
    }

    return (
        <span className={ color(cell) }>
            { cell }
        </span>
    );
  }
},  {
  dataField: 'returnperiod',
  text: 'Return Ref. Date',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span>
        { cell } %
    </span>
  ),
}, {
  dataField: 'return1y',
  text: 'Return 1Y',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span>
        { cell } %
    </span>
  ),
}
];




class InsidersTable extends React.Component {
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
                  fileName: 'insiders_transactions.csv',
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

export default InsidersTable;
