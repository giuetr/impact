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






const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'ticker',
  text: 'Ticker',
  sort: true,
  sortCaret,
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
}
];




class PoliticsTable extends React.Component {
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
    ticker: i[1].ticker,
    name: i[1].shortName,
    senator: i[1].senator,
    value: i[1].amount,
    date: i[1].transaction_date,
    price: i[1].amount,
    trade: i[1].type,
    change_from_last: i[1].change_from_last,
    percent_of_float: i[1].percent_of_float
  };
});
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
