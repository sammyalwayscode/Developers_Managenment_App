import React from 'react'
import AuthFunction from './Components/AuthFunctions/AuthFunction';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Login from './Components/LoginPage/Login';
import Welcome from './Components/WelcomePage/Welcome';
import GetStarted from './Components/GetStarted/GetStarted';
import ProjUpload from './Components/ProjUpload/ProjUpload';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" exact component={AuthFunction} />
          <Route path="/start" exact component={GetStarted} />
          <Route path="/upload" exact component={ProjUpload} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>

    </div>
  );
}
export default App;
