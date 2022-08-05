import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Components
import Home from "./components/home/Home";
import Browse from "./components/browse/Browse";
import Modal from "./components/modal/Modal";
import Details from "./components/details/Details"
import CartSummary from "./components/cart/CartSummary";
import Search from "./components/search/Search";
import Login from "./components/login/Login";
import NavBar from "./components/navBar/NavBar";
import CartCheckout from "./components/cart/CartCheckout";
import Error from "./components/error/Error";
// Store
import { selectAuth} from "./store/userSlice";
import { setCategory} from "./store/productsSlice";

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuth);
  
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
    <>
    <Router>
      <NavBar updateCategory={updateCategory}/>
      <main>
      <Modal updateCategory={updateCategory}/>
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
    <footer className="my-5 pt-5 text-muted text-center text-small">
      <p className="mb-1">&copy; 2017–2022 Company Name</p>
      <ul className="list-inline">
        <li className="list-inline-item"><a href="#">Privacy</a></li>
        <li className="list-inline-item"><a href="#">Terms</a></li>
        <li className="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>
    </>
  )
}

export default App;
