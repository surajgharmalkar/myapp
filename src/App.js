import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Mobiles from './components/mobiles';
import Newrelease from './components/newrelease';
import Electronics from './components/electronics';
import Home from './components/home';
import Notfound from './components/notfound';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';



function App() {
  return (<div>
     
   <Navbar/>
    
   <Switch>
     <Route path="/Mobiles" component={Mobiles}/>
      <Route path="/Electonics" component={Electronics}/>
      <Route path="/Newrelease" component={Newrelease}/>
      <Route path="/Notfound" component={Notfound}/>
       <Route path="/" exact component={Home}/>
       <Redirect to="/Notfound"/>
    
     </Switch>
     
       
    
    </div>
  );
}

export default App;
