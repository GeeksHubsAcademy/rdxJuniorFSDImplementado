
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Header from './components/Header/Header';
import Profile from './containers/Profile/Profile';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
          <Header/>

          <Switch>

            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/profile" exact component={Profile}/>
          </Switch>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
