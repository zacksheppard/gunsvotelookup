import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import 'normalize.css/normalize.css';
import '../sass/app.scss';

import {HomePage} from './home-page.jsx';
import {StatePage} from './state-page.jsx';
import {DistrictPage} from './district-page.jsx';

// Opt-out of persistent state, not recommended.
const history = createHistory({
  queryKey: false
});

class App extends React.Component {
  render() {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path=":state" component={StatePage}/>
      <Route path=":state/:district" component={DistrictPage} />
    </Route>
  </Router>
), document.querySelector("#app"));
