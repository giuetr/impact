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
}
,  {
  dataField: 'name',
  text: 'Company'
}
/* ,{
  dataField: 'price',
  text: 'Price',
  sort: true,
  sortCaret
}
*/
, {
  dataField: 'short_interest_date',
  text: 'Interest Date',
  sort: true,
  sortCaret
}, {
  dataField: 'shares_outstanding',
  text: 'Total Shares',
  sort: true,
  sortCaret
}, {
  dataField: 'public_float',
  text: 'Public Float',
  sort: true,
  sortCaret
}, {
  dataField: 'shares_sold_short',
  text: 'Total Shorted Shares',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-danger">
        { cell }
    </span>
  ),
}, {
  dataField: 'change_from_last',
  text: 'Change from Prev.',
  sort: true,
  sortCaret,
  style: (cell) => {
    if (cell > 0) {
      return {
        color: '#33AE9A'
      };
    }
    return {
       color: '#ED1C24'
    };
  },
}, {
  dataField: 'percent_of_float',
  text: 'Percent of float',
  sort: true,
  sortCaret,
  formatter: (cell) => (
    <span className="text-primary">
        { cell }
    </span>
  ),
}
];




class ShortsTable extends React.Component {
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
      //  price: i[1].regularMarketPrice,
        shares_outstanding: i[1].shares_outstanding,
        public_float: i[1].public_float,
        short_interest_date: i[1].short_interest_date,
        shares_sold_short: i[1].shares_sold_short,
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

export default ShortsTable;
