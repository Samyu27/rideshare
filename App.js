import React ,{ Component} from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';



class App extends Component {
  
    render() {
      return (
        <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/Signup" component={Signup}/>
        <Route path="/Login" component={Login}/>
      </Switch>
    </div>
  </BrowserRouter>
      );
    }
  }
  
  export default App;
  