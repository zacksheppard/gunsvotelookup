import React from 'react';
import Link from 'react-router';
import '../sass/person-card.scss';

import xhr from 'xhr';

export class PersonCard extends React.Component {

  render() {
    return (
      <article className="person-card" key={this.props.key}>
        <h2 className="person-card__heading">{`${this.props.person.firstname} ${this.props.person.lastname}`}</h2>
      </article>
    )
  }

}
