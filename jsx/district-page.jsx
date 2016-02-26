import React from 'react';
import Link from 'react-router';
import '../sass/district-page.scss';
import {PersonCard} from './person-card.jsx';

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

      return {
        name: stateData.name,
        districts: districts,
        senators: stateData.senators
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

  renderPersonCards() {
    var district = this.getDistrict(this.props.params.state, this.props.params.district);
    return district.senators.map((senator, i) => {
      return (<PersonCard person={senator} key={`person-${i}`} />);
    });
  }

  render() {
    return (
      <div className="district-page">
        <h1 className="district-page__heading">Hi District</h1>
        {!this.state.congress ? (
          <p>Loading...</p>
        ) : (
          <section>
            {this.renderPersonCards()}
          </section>
        )}
      </div>
    );
  }

}
