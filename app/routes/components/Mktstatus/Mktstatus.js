import React from 'react';


import {
  Row,
  Col,
  Badge
} from '../../../components'




class Mktstatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
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
                <span className="small text-muted"> CET</span>
                </h5>
                <Badge color="info">MARKET OPEN</Badge>
            </Col>
        </Row>
      
    );
  }
}

export default Mktstatus;
