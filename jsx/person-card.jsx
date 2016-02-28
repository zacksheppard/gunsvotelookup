import React from 'react';
import Link from 'react-router';
import '../sass/person-card.scss';

import xhr from 'xhr';

export class PersonCard extends React.Component {

  render() {
    let title = this.props.person.title_long;
    return (
      <article className={`person-card person-card-type-${title.toLowerCase()}`} key={this.props.key}>
        <header>
          <h2 className="person-card__heading">{`${this.props.person.firstname} ${this.props.person.lastname}`}</h2>
          <p>{`${title}: ${this.props.state}`}</p>
        </header>
        <section>
          <article>
            <h3>NRA Grade</h3>
            <p>{this.props.person.gunMetrics.nraRating2013 || 'N/A'}</p>
          </article>
          <article>
            <h3>Brady Score</h3>
            <p>{this.props.person.gunMetrics.bradyRating2014 || 'N/A'}</p>
          </article>
          <article>
            <h3>NRA Payment</h3>
            <p>{this.props.person.gunMetrics.nraContributions2014 || 'N/A'}</p>
          </article>
        </section>
      </article>
    )
  }

}
