import React from 'react';
import Link from 'react-router';
import '../sass/person-card.scss';

import xhr from 'xhr';

export class PersonCard extends React.Component {

  render() {
    let title = this.props.person.title_long;
    let party = this.props.person.party;

    return (
      <article className={`person-card person-card--${party.toLowerCase()}`} key={this.props.key}>
        <header className="header">
          <img className="header__image" src="assets/capital.svg" />
          <h2 className="header__heading">{`${this.props.person.firstname} ${this.props.person.lastname}`}</h2>
          <p className="header__title">{`${title}: ${this.props.state}`}</p>
        </header>
        <div className="divider">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <section className="gun-metrics-list">
          <article className="gun-metrics-item">
            <h3 className="gun-metrics-item__heading">NRA Grade</h3>
            <p className="gun-metrics-item__value">{this.props.person.gunMetrics.nraRating2013 || 'N/A'}</p>
          </article>
          <article className="gun-metrics-item">
            <h3 className="gun-metrics-item__heading">Brady Score</h3>
            <p className="gun-metrics-item__value">{this.props.person.gunMetrics.bradyRating2014 || 'N/A'}</p>
          </article>
          <article className="gun-metrics-item">
            <h3 className="gun-metrics-item__heading">NRA Payment</h3>
            <p className="gun-metrics-item__value">{this.props.person.gunMetrics.nraContributions2014 || 'N/A'}</p>
          </article>
        </section>
        <section className="gun-metrics-vote">
          <p className="gun-metrics-vote__value">¯\_(ツ)_/¯</p>
        </section>
        <button className="gun-metrics-cta">Vote</button>
      </article>
    )
  }

}
