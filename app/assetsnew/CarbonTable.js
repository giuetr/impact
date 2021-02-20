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
  Badge,
  UncontrolledTooltip,
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

      var products = this.props.items.map(function(i) {
        return {
          ticker: i[1].Symbol,
          name: i[1].shortName,
          price: i[1].regularMarketPrice,
          emissions: i[1].ghc_emissions,
          change1d: i[1].CHANGE1D,
          change1m: i[1].RETURN1M,
          change1y: i[1].RETURN1Y,
          eps: i[1].EPS,
          pe: i[1].PE,
          mktcap: i[1].MKTCAP,
          beta: i[1].BETA
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
                        <Button color="info" outline id="UncontrolledTooltipTop">
                          <i className="fa fa-download mr-2"></i>
                                Export
                        </Button>
                          <UncontrolledTooltip placement="top" target="UncontrolledTooltipTop">
                                Upgrade your plan to export data
                          </UncontrolledTooltip>
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
