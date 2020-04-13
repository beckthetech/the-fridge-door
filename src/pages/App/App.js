import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import * as groceriesAPI from '../../services/groceries-api';

import userService from '../../utils/userService';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

import NavBar from '../../components/NavBar/NavBar';
import ItemListPage from '../../pages/ItemList/ItemListPage';
import AddItemPage from '../../pages/AddItemPage/AddItemPage';

class App extends Component {
  state = {
    groceries: [],
    user: userService.getUser()
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleAddItem = async newItemData => {
    const newItem = await groceriesAPI.create(newItemData);
    this.setState(state => ({
      groceries: [...state.groceries, newItem]
    }),
      () => this.props.history.push('/'));
  }

  // Lifecycle Methods

  async componentDidMount() {
    const groceries = await groceriesAPI.getAll();
    this.setState({ groceries });
  }

  render() {
    return (
      <div className="App">
        <header >
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
          Groceries CR
          <nav>
            <NavLink exact to='/'>GROCERIES</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>Add Item</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/' render={() =>
            <ItemListPage
              groceries={this.state.groceries}
            />
          } />
          <Route exact path='/add' render={() =>
            <AddItemPage handleAddItem={this.handleAddItem}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </main>
      </div>
    )
  };
}

export default App;