import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';



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
  name: "TSLA",
  price: 120,
  rating: 'Top',
}, {
  id: 2,
  name: "AAPL",
  price: 80,
  rating: 'Good'
}, {
  id: 3,
  name: "AMD",
  price: 123,
  rating: 'Insufficient'
}, {
  id: 4,
  name: "AAPL",
  price: 133,
  rating: 'Average'
}, {
  id: 5,
  name: "JNJ",
  price: 423,
  rating: 'Average'
}];




const columns = [{
  dataField: 'id',
  text: 'Ranking',
  sort: true,
  sortCaret
}, {
  dataField: 'name',
  text: 'Company',
  formatter: (cell) => (
    <span className="text-inverse">
        { cell }
    </span>
  )
}, {
  dataField: 'price',
  text: 'Price',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-info">
        { cell }
    </span>
  )
}, {
  dataField: 'rating',
  text: 'Rating',
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
}];




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
