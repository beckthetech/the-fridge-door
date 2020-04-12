import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

import * as itemAPI from '../../services/groceries-api';
import ItemListPage from '../../pages/ItemList/ItemListPage';
import AddItemPage from '../../pages/AddItemPage/AddItemPage';

class App extends Component {
  state = {
    groceries: []
  };

  handleAddItem = async newItemData => {
    const newItem = await itemAPI.create(newItemData);
    this.setState(state => ({
      groceries: [...state.groceries, newItem]
    }),
      () => this.props.history.push('/'));
  }

  // Lifecycle Methods

  async componentDidMount() {
    const groceries = await itemAPI.getAll();
    this.setState({ groceries });
  }

  render() {
    return (
      <div className="App">
        <header >
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
        </main>
      </div>
    )
  };
}

export default App;