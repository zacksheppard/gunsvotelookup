import React from 'react';
import Link from 'react-router';
import '../sass/district-page.scss';

import xhr from 'xhr';

export class DistrictPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let that = this;

    xhr({
      uri: `assets/congressperson.json`,
      method: 'GET'
    }, (err, resp, body) => {
      this.setState({
        'data': JSON.parse(body)
      });
    })
  }

  render() {
    if(this.state.data) {
      return <h1>Hi District</h1>
    } else {
      return (
        <div>
          <h1>Hi District</h1>
          <p>Loading...</p>
        </div>
      );
    }
  }

}
