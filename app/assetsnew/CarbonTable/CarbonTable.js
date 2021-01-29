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
  high52: 243,
  low52: 11,
  avgvolume: 3123233,
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
  high52: 123,
  low52: 12,
  avgvolume: 31212333,
}, {
  ticker: "FB",
  name: "Facebook",
  price: 48,
  emissions: 4667762,
  change1d: 9,
  change1m: 18,
  change1y: 24,
  eps: 12,
  pe: 9,
  mktcap: 12391233,
  beta: 7
},];




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
  sortCaret
}, {
  dataField: 'change1d',
  text: '1D Change',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span>
        { cell } %
    </span>
  ),
}, {
  dataField: 'change1m',
  text: '1M Change',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span>
        { cell } %
    </span>
  ),
},  {
  dataField: 'change1y',
  text: '1Y Change',
  sort: true,
  sortCaret,
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
  dataField: 'beta',
  text: 'Beta',
  sort: true,
  sortCaret
},];




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

export default CarbonTable;
