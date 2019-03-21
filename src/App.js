import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import  ProductList from './components/ProductList';
//Fetched from ProductList >> import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={ProductList}></Route>
         <Route path="/details" component={Details}></Route>
         <Route path="/cart" component={Cart}></Route>
         <Route component={Default}></Route>
       </Switch>
       <Modal/>
     </React.Fragment>
    );
  }
}

export default App;
