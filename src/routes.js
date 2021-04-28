import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calendario from './pages/Calendario';
import Formularios from './pages/Formularios';

import Formulario1 from './pages/Formularios/FormD/Formulario1';


const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calendario"exact component={Calendario} />
        <Route path="/formularios"exact component={Formularios} />
        <Route path="/formulario"exact component={Formulario1} />
    </Switch>
);

export default Routes;