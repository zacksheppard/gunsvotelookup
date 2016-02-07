import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import 'normalize.css/normalize.css';
import '../sass/app.scss';

import {HomePage} from './home-page.jsx';
import {DetailPage} from './detail-page.jsx';

// Opt-out of persistent state, not recommended.
const history = createHistory({
  queryKey: false
});

class App extends React.Component {
  render() {
    let view = null;
    let zip = parseInt(this.props.params.zipCode);

    if (!zip || zip.toString().length !== 5 || typeof zip !== 'number') {
      view = (<HomePage />);
    } else {
      view = (<DetailPage zipCode={this.props.params.zipCode} />);
    }
    return (
      <div>
        {view}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path=":zipCode(94110)" component={DetailPage}/>
    </Route>
  </Router>
), document.querySelector("#app"));
