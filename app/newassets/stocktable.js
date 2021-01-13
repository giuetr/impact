import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {
    Col,
    Row,
    Container
} from './routes/components';


class stocktable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrice: null,
        };
    }


    render() {
        return (

        <Container>
          <Row className="mb-3">
            <Col lg={ 12 }>
                <h5 className="mb-0">
                Ciao test
                </h5>
            </Col>
          </Row>
        </Container>

        );
    }

}
export default stocktable
