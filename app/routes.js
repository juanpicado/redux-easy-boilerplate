import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { asyncComponent } from './utils/asyncComponent'; /* for async page, show loading component */

import Root from './components/Root';
import Posts from './components/Containers/Posts';
import About from './components/Containers/About';
import ReducelessExample from './components/Containers/ReducelessExample';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Posts} />
    { /* async component */}
    <Route path="/async-example" getComponent={(location, callback) =>
      __CLIENT__
        ? asyncComponent(require.ensure([], require => callback('', require('./components/Containers/AsyncExample').default), 'async-example'))
        : callback('', require('./components/Containers/AsyncExample').default)
    } />

    <Route path="/posts" component={Posts} />
    <Route path="/about" component={About} />
    <Route path="/reduceless-example" component={ReducelessExample} />
  </Route>
);
