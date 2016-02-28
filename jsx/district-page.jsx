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
    let representitives = [];

    if (congress && congress[state]) {

      stateData = congress[state];

      if (stateData.representatives) {
        representitives = stateData.representatives.filter((rep) => {
          return rep.district = district;
        });
      }

      return {
        name: stateData.name,
        representitives: representitives,
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

  renderSenatorCards() {
    var district = this.getDistrict(this.props.params.state, this.props.params.district);
    return district.senators.map((senator, i) => {
      return (<PersonCard person={senator} state={district.name} key={`person-${i}`} />);
    });
  }

  renderRepCards() {
    var district = this.getDistrict(this.props.params.state, this.props.params.district);
    console.log(district);
    return district.representitives.map((rep, i) => {
      return (<PersonCard person={rep} state={district.name} key={`person-${i}`} />);
    });
  }

  render() {
    return (
      <div className="district-page">
        {!this.state.congress ? (
          <p>Loading...</p>
        ) : (
          <section className="people">
            {this.renderSenatorCards()}
            {this.renderRepCards()}
          </section>
        )}
      </div>
    );
  }

}
