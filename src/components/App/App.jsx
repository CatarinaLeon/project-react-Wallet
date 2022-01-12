import React from 'react';
import { Component } from 'react';
import { MainPage } from '../_page/MainPage';
import TransactionPage from '../_page/TransactionPage/TransactionPage';

class App extends Component {
  state = {
    activePage: 'main',
    data: [],
    categories: [],
  };

  openActivePage = (activePage = 'main') => {
    this.setState({ activePage });
  };

  addCategory = category => {
    this.setState(prevState => {
      return {
        categories: [...prevState.categories, category],
      };
    });
  };

  addData = dataForm => {
    this.setState(prevState => {
      return { data: [...prevState.data, dataForm] };
    });
  };

  render() {
    const { activePage, categories } = this.state;
    return (
      <>
        {activePage === 'main' && (
          <MainPage openActivePage={this.openActivePage} />
        )}
        {activePage === 'costs' && (
          <TransactionPage
            addData={this.addData}
            closeTransactionPage={this.openActivePage}
            transType={'costs'}
            categories={categories}
            addCategory={this.addCategory}
          />
        )}
        {activePage === 'incomes' && (
          <TransactionPage
            addData={this.addData}
            closeTransactionPage={this.openActivePage}
            transType={'incomes'}
            categories={categories}
            addCategory={this.addCategory}
          />
        )}
        {activePage === 'balance' && <h1>balance</h1>}
      </>
    );
  }
}

export default App;
