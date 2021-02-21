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




class InsidersTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      
    };
  }
  render() {
var counter=0
    var products = this.props.items.map(function(i) {
      return {
        id: counter++,
        ticker: i[1].symbol,
        name: i[1].shortName,
        price: i[1].regularMarketPrice,
        purchases: i[1].Purchases,
        sales: i[1].Sales,
        totbought: i[1].Total_Bought,
        totsold: i[1].Avg_Shares_Sold,
        lsratio: i[1].Buy_Sell_Ratio,
        returnperiod: i[1].Period_Return
      };
  });

const columns = [{
  dataField: 'id',
  text: 'Id',
  sort: true,
  sortCaret,
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
},{
  dataField: 'price',
  text: 'Price',
  sort: true,
  sortCaret
},
 {
  dataField: 'purchases',
  text: 'Trades Long',
  sort: true,
  sortCaret
},
 {
  dataField: 'sales',
  text: 'Trades Shorts',
  sort: true,
  sortCaret
}, {
  dataField: 'totbought',
  text: 'Shares Long',
  sort: true,
  sortCaret,
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
  ),
}
];






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
