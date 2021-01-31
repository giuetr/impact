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
  id: 1,
  ticker: "TSLA",
  name: "Tesla Inc.",
  senator: "Michael Jones",
  value: "$ 1000-5000",
  date: "12/31/2020",
  price: 120,
  trade: 'Sale',
  return1y: 0.1,
  salesgrowth: 0.11,
}, {
  id: 2,
  ticker: "NIO",
  name: "Nio Inc.",
  senator: "Henry Williams",
  value: "$ 10000-50000",
  date: "12/31/2020",
  price: 11,
  trade: 'Purchase',
  return1y: 0.12,
  salesgrowth: 0.14,
}, {
  id: 3,
  ticker: "MU",
  name: "Micron Technology Inc.",
  senator: "Jane Wilde",
  value: "$ 100000-500000",
  date: "12/10/2020",
  price: 54,
  trade: 'Purchase',
  return1y: 0.03,
  salesgrowth: 0.05,
}, {
  id: 4,
  ticker: "AMD",
  name: "Advanced Micro Devices, Inc.",
  senator: "Mary Ross",
  value: "$ 100000-500000",
  date: "12/01/2021",
  price: 32,
  trade: 'Sale',
  return1y: 0.41,
  salesgrowth: 0.21,
},];




const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'ticker',
  text: 'Ticker',
  formatter: (cell) => (
    <span className="text-info fw-500">
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
},  {
  dataField: 'senator',
  text: 'Senator',
  sort: true,
  sortCaret
},  {
  dataField: 'value',
  text: 'Value',
  sort: true,
  sortCaret
},{
  dataField: 'date',
  text: 'Date',
  sort: true,
  sortCaret
}, {
  dataField: 'price',
  text: 'Price',
  formatter: (cell) => (
    <span className="text-info">
        { cell }
    </span>
  ),
}, {
  dataField: 'trade',
  text: 'Trade',
  sort: true,
  sortCaret,
  formatter: (cell) => {
    const color = (status) => {
        const map = {
            'Purchase': 'success',
            'Sale': 'danger'
        };
        return map[status];
    }

    return (
        <Badge color={ color(cell) }>
            { cell }
        </Badge>
    );
  }
},{
  dataField: 'return1y',
  text: 'Return 1Y',
  sort: true,
  sortCaret
}, {
  dataField: 'salesgrowth',
  text: 'Sales Growth',
  sort: true,
  sortCaret
},
];




class PoliticsTable extends React.Component {
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
                  fileName: 'politicians_trading.csv',
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

export default PoliticsTable;
