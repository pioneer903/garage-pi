import React, { Component } from 'react'
import axios from 'axios'

import GarageState from '../components/GarageState'
import GarageButton from '../components/GarageButton'

class GarageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { garageState: '' };
    this.state2 = { garageState2: '' };

    this.updateStatus = this.updateStatus.bind(this);
    this.sendRelay = this.sendRelay.bind(this);
    this.getGarageStatus = this.getGarageStatus.bind(this);

    this.updateStatus2 = this.updateStatus2.bind(this);
    this.sendRelay2 = this.sendRelay2.bind(this);
    this.getGarageStatus2 = this.getGarageStatus2.bind(this);
  }

  componentDidMount() {
    this.updateStatus();
  }

  componentDidMount2() {
    this.updateStatus2();
  }

  updateStatus() {
    axios.get('/status')
      .then(res => {
        this.setState({ garageState: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateStatus2() {
    axios.get('/status2')
      .then(res => {
        this.setState2({ garageState2: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  sendRelay() {
    axios.get('/relay')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  sendRelay2() {
    axios.get('/relay2')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getGarageStatus() {
    let { garageState } = this.state;

    if (!garageState) {
      return '';
    }

    if (garageState.open) {
      return 'Open';
    } else if (garageState.close) {
      return 'Closed';
    } else {
      return 'Partially open';
    }
  }


  getGarageStatus2() {
    let { garageState2 } = this.state2;

    if (!garageState2) {
      return '';
    }

    if (garageState2.open) {
      return 'Open';
    } else if (garageState2.close) {
      return 'Closed';
    } else {
      return 'Partially open';
    }
  }

  render() {
    let { garageState } = this.state;
    let { garageState2 } = this.state2;

    return (
      <div>
        <GarageState getGarageStatus={this.getGarageStatus} />
        <GarageButton
          buttonText={garageState.open ? 'Close' : 'Open'}
          sendRelay={this.sendRelay} />
      </div>
      <div>
        <GarageState2 getGarageStatus2={this.getGarageStatus2} />
        <GarageButton2
          buttonText2={garageState2.open ? 'Close' : 'Open'}
          sendRelay2={this.sendRelay2} />
      </div>
    )
  }
}

export default GarageContainer
