import React from 'react';
import Link from 'react-router';
import '../sass/detail-page.scss';

export class DetailPage extends React.Component {
  render() {
    return <h1>Detail {this.props.zipCode}</h1>
  }
}
