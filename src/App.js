// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registration from './components/Registration';
import Header from './components/Header/Header';
import Login from './components/Login';
import { Typography } from '@material-ui/core';

// import { logog } from './reactimg.png';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route Exact path="/login" ><Login /></Route>
            <Route path="/register" ><Registration /></Route>
            {/* <Route path="/login" Component={Login}></Route> */}
          </Switch>

        </div>

        <div>
          <Typography variant= "h3" style= {{textAlign: "center", marginTop: 30}}> Hello in React World </Typography>
    </div>

      </div>
    </Router>
  );
}

export default App;
