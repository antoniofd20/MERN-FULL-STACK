import React from 'react';

import login from './components/auth/login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/AlertaState';
import AuthState from './context/autenticacion/AuthState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {

  //console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;


// video 7 carpeta 26 https://mega.nz/folder/NigAnKaB#2uGl78a19MRo6zSnkt2HoA/folder/wnoH1SRD