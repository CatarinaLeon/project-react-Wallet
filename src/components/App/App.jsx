import React from 'react'
import { Component } from 'react';
import { MainPage } from '../_page/MainPage'
import TransactionPage from '../_page/TransactionPage/TransactionPage'

class App extends Component {
    state = {
        activePage: 'main', 
        data: [],
    };

    openActivePage = (activePage='main') => {
        this.setState({ activePage });
    }

    addData = (dataForm) => {
    this.setState((prevState) => {
      return { data: [...prevState.data, dataForm] };
    });
  };

    render() {
        const { activePage } = this.state;
    return (
        <>
            {activePage === 'main' && <MainPage openActivePage={this.openActivePage}/>}
            {activePage === 'costs' && <TransactionPage addData={this.addData} closeTransactionPage={this.openActivePage} transType={'costs'}/>}
            {activePage==='incomes' && <TransactionPage addData={this.addData} closeTransactionPage={this.openActivePage} transType={'incomes'}/>}
            {activePage==='balance' && <h1>balance</h1>}
        </>
        
    )    
}
    
}

export default App
