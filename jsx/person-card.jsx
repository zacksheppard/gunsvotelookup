import React from 'react';
import Link from 'react-router';
import '../sass/person-card.scss';

import xhr from 'xhr';

export class PersonCard extends React.Component {

  render() {
    return (
      <article className="person-card" key={this.props.key}>
        <h2>{this.props.person.full_name}</h2>
      </article>
    )
  }

}
