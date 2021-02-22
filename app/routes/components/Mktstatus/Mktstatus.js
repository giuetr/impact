import React from 'react';
import MarCal from 'marcal';


import {
  Row,
  Col,
  Badge
} from '../../../components'



const mar_cal = new MarCal();

const is_nyse_open = mar_cal.isMarketOpen();
if (is_nyse_open) {
  console.log('NYSE is open')
} else {
  console.log('NYSE is closed')
}


class Mktstatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  Mktstatus() {
    const status = mar_cal.isMarketOpen();
    if (status) {
      return (
        <Badge color="info">MARKET OPEN</Badge>
      );
    } else {
      return (
        <Badge color="danger">MARKET CLOSED</Badge>
      );
    }
  }

  async componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }  


  render() {
    return (
      
        <Row className="mb-3">
            <Col lg={ 12 }>
                <h5 className="mb-0">
                <span>{this.state.date.toDateString()} </span>
                <span className="text-info">{this.state.date.toLocaleTimeString()}</span>
                {/* <span className="small text-muted"> CET</span> */}
                </h5>
                {this.Mktstatus()}
            </Col>
        </Row>
      
    );
  }
}

export default Mktstatus;
