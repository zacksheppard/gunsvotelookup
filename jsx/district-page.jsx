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

  getDistrict(state, district) {

    let congress = this.state.congress;
    let stateData;
    let districts = {};

    if (congress && congress[state]) {

      stateData = congress[state];

      if (stateData.representatives) {
        stateData.representatives.forEach((rep) => {
          districts[rep.district] = rep;
        });
      }

      if (stateData.senators) {
        stateData.senators.forEach((sen) => {
          districts[sen.district] = sen;
        });
      }

      return {
        name: stateData.name,
        districts: districts
      }
    }

  }

  getData() {
    let that = this;
    let data;

    xhr({
      uri: `assets/congressperson.json`,
      method: 'GET'
    }, (err, resp, body) => {

      try {
        data = JSON.parse(body);
      } catch (error) {
      }

      if (data) {
        this.setState({
          'congress': data
        });
      }
    })
  }

  render() {
    console.log(this.getDistrict(this.props.params.state, this.props.params.district));
    if(this.state.congress) {
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
