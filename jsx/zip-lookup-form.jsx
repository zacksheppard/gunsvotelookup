import React from 'react';
import Link from 'react-router';
import '../sass/zip-lookup-form.scss';

import xhr from 'xhr';

const apikey = '17e8d6f0395e49098138345995685912';

export class ZipLookupForm extends React.Component {

  getZip(event) {
    let that = this;

    event.preventDefault();

    xhr({
      uri: `https://congress.api.sunlightfoundation.com/districts/locate?apikey=${apikey}&zip=${event.target.zipInput.value}`,
      method: 'GET'
    }, (err, resp, body) => {
      that.props.onData(err, JSON.parse(body).results[0]);
    })
  }

  render() {
    return (
      <form className="zip-lookup-form" onSubmit={this.getZip.bind(this)}>
        <input name="zipInput" className="zip-lookup-form__input" type="text" pattern="\d{5}-?(\d{4})?" placeholder="Zip Code" />
      </form>
    )
  }

}
