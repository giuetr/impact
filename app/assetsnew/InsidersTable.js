import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, numberFilter } from 'react-bootstrap-table2-filter';



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
  text: 'Company',
  formatter: (cell) => (
    <span className="text-inverse">
        { cell }
    </span>
  ),
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
              <BootstrapTable
                data={ products }
                keyField='id'
                columns={ columns }
                classes="table-responsive-lg"
                bordered={ false }
                responsive
                filter={ filterFactory() }
              >
              </BootstrapTable>
            </CardBody>
          </Card>
        </div>
      </Container>
      
    );
  }
}

export default InsidersTable;
