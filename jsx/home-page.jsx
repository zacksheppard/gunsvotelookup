import React from 'react';
import Link from 'react-router';
import '../sass/home-page.scss';

import {ZipLookupForm} from './zip-lookup-form.jsx';

export class HomePage extends React.Component {

  componentDidMount() {
  }

  onData(err, response) {
    location.replace(`index.html#/${response.state}/${response.district}`);
  }

  render() {
    return (
      <div>
        <h1>Find congress&#39;s gun position</h1>
        <ZipLookupForm onData={this.onData.bind(this)} />
      </div>
    )
  }

}
