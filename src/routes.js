import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Rules from './pages/rules';
import Parcial from './pages/parcial';

const Routes = () => (        
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/rules/" component={Rules} />
        </Switch>
    </BrowserRouter>
);

export default Routes;