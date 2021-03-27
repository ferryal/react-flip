import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Redirect } from 'react-router-dom';
import ListTransaction from './schenes/List-Transaction';
import TransactionDetail from './schenes/Transaction-Detail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ListTransaction} />
    <Route path="/transaksi/:id" component={TransactionDetail} />
    <Redirect to="/" />
  </Switch>
);

const HotApp = hot(Routes);
export { HotApp as Routes };
