import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./components/home/Home";
import Browse from "./components/browse/Browse";
import Modal from "./components/modal/Modal";
import Details from "./components/details/Details"
import { setCategory} from "./store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import CartSummary from "./components/cart/CartSummary";
import Search from "./components/search/Search";
import { selectAuth} from "./store/userSlice";
import Login from "./components/login/Login";
import NavBar from "./components/navBar/NavBar";
import CartCheckout from "./components/cart/CartCheckout";
import Error from "./components/error/Error";

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuth);

  const hideModal = (e) => {
    document.getElementsByClassName('modal')[0].style.display = 'none';
    const modalId = e.target.dataset.modalId;
  }
  
  // Set category to match pathname
  const updateCategory = (e) => {
    if (e.target.dataset.modalId === 'women') {
      dispatch(setCategory("women's clothing"));
    } else if (e.target.dataset.modalId === 'men') {
      dispatch(setCategory("men's clothing"));
    } else {
      dispatch(setCategory("jewelery"));
    }
  };

  return (
    <Router>
      <NavBar hideModal={hideModal} updateCategory={updateCategory}/>
      <main>
      <Modal hideModal={hideModal} updateCategory={updateCategory}/>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/401">
          <Error />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/checkout">
        {authenticated ? <CartCheckout /> : <Redirect to="/401"/>}
          
        </Route>
        <Route path="/cart">
          {authenticated ? <CartSummary /> : <Redirect to="/401"/>}
          
        </Route>
        <Route path="/men">
          <Browse />
        </Route>
        <Route path="/women">
          <Browse />
        </Route>
        <Route path="/jewelry">
          <Browse />
        </Route>
        <Route path="/login">
          {authenticated ? <Redirect to="/"/> : <Login />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </main>
    </Router>
  )
}

export default App;
