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
  price: 120,
  esgscore: 30,
  rating: 'Top',
  return1y: 0.1,
  salesgrowth: 0.11,
  pe: 9,
  mktcap: 2000,
}, {
  id: 2,
  ticker: "NIO",
  name: "Nio Inc.",
  price: 11,
  esgscore: 43,
  rating: 'Good',
  return1y: 0.12,
  salesgrowth: 0.14,
  pe: 14,
  mktcap: 1000,
}, {
  id: 3,
  ticker: "MU",
  name: "Micron Technology Inc.",
  price: 54,
  esgscore: 12,
  rating: 'Top',
  return1y: 0.03,
  salesgrowth: 0.05,
  pe: 8,
  mktcap: 800,
}, {
  id: 4,
  ticker: "AMD",
  name: "Advanced Micro Devices, Inc.",
  price: 32,
  esgscore: 33,
  rating: 'Average',
  return1y: 0.41,
  salesgrowth: 0.21,
  pe: 5,
  mktcap: 950,
},];




const columns = [{
  dataField: 'id',
  text: 'ESG Rank',
  sort: true,
  sortCaret
}, {
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
  dataField: 'return1y',
  text: 'Return 1Y',
  sort: true,
  sortCaret
}, {
  dataField: 'salesgrowth',
  text: 'Sales Growth',
  sort: true,
  sortCaret
}, {
  dataField: 'pe',
  text: 'P/E',
  sort: true,
  sortCaret
}, {
  dataField: 'mktcap',
  text: 'MarketCap',
  sort: true,
  sortCaret
},
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

export default Tablestock;
