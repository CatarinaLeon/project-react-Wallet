import { createContext, useContext, useState, useEffect } from 'react';
import { getTransactions } from '../utils/api';

const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

export const MainProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('main');
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [categories, setCategories] = useState([
    { id: 'diff', title: 'Разное' },
  ]);
  const [error, setError] = useState(null);

  const toggleActivePage = (activePage = 'main') => {
    setActivePage(activePage);
  };

  const addTransaction = ({ dataForm, transType }) => {
    transType === 'costs' && setCosts(prevCosts => [...prevCosts, dataForm]);
    transType === 'incomes' &&
      setIncomes(prevIncomes => [...prevIncomes, dataForm]);
  };

  const addCategory = category => {
    setCategories(prevCategories => [...prevCategories, category]);
  };

  useEffect(() => {
    console.log('useEffect');
    const setTransactions = async () => {
      try {
        const costs = await getTransactions('costs');
        const incomes = await getTransactions('incomes');
        setCosts(costs);
        setIncomes(incomes);
      } catch (error) {
        setError(error.message);
      }
    };
    setTransactions();
  }, []);

  return (
    <MainContext.Provider
      value={{
        activePage,
        costs,
        incomes,
        categories,
        error,
        setError,
        toggleActivePage,
        addTransaction,
        addCategory,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
