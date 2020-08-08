import React, { Suspense} from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import formulario from './view/study/index';
import capa from './view/capa/index';
import study from './view/study/index';
import classes from './view/classes/index'

export default () => (
  <HashRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path='/' component={capa} />
        <Route path='/page-study' component={study} />
        <Route path='/page-classes' component={classes} />
      </Switch>
    </Suspense>
  </HashRouter>
)
