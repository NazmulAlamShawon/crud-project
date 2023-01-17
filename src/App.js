
import './App.css';
import Home from './Pages/Home';
import Register from './components/Registers/Register';
import MainNavbar from './components/navbar/MainNavbar';
import EditReg from './components/Edit/EditReg';
import Details from './components/Details';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <MainNavbar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/editreg/:id" component={EditReg } />
        <Route exact path="/view/:id" component={Details } />
       </Switch>
    
    </>
  );
}

export default App;
