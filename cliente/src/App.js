import React from 'react';

import login from './components/auth/login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;


// video 3 carpeta 18 https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/wnoH1SRD