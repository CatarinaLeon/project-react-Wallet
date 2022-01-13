import React from 'react';
import { useEffect } from 'react';
import { useMainContext } from '../../context/MainProvider';
import { MainPage } from '../_page/MainPage';
import TransactionPage from '../_page/TransactionPage/TransactionPage';

const App = () => {
  const { activePage, error, setError } = useMainContext();

  useEffect(() => {
    if (error) {
      alert(error);
      setError(null);
    }
  }, [error, setError]);

  return (
    <>
      {activePage === 'main' && <MainPage />}
      {activePage === 'costs' && (
        <TransactionPage
          // addData={addTransaction}
          // closeTransactionPage={openActivePage}
          transType={'costs'}
          // categories={categories}
          // addCategory={addCategory}
          // setError={setError}
        />
      )}
      {activePage === 'incomes' && (
        <TransactionPage
          // addData={addTransaction}
          // closeTransactionPage={openActivePage}
          transType={'incomes'}
          // categories={categories}
          // addCategory={addCategory}
          // setError={setError}
        />
      )}
      {activePage === 'balance' && <h1>balance</h1>}
    </>
  );
};

export default App;
