import React from 'react';
import MainInfo from '../_MainInfo/MainInfo';
import OpenHistoryBtns from '../OpenHistoryBtns/OpenHistoryBtns';
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from '../../assets/options/mainInfoOptions.json';
import { useMainContext } from '../../context/MainProvider';

export const MainPage = () => {
  const { toggleActivePage } = useMainContext();
  return (
    <section style={{ width: '400px', margin: '0 auto' }}>
      <h1>Журнал расходов</h1>
      <MainInfo
        btnTitle="Add"
        options={costsInfoOptions}
        title="Расходы"
        openActivePage={toggleActivePage}
        activePage="costs"
      />
      <MainInfo
        btnTitle="Add"
        options={incomesInfoOptions}
        title="Доходы"
        openActivePage={toggleActivePage}
        activePage="incomes"
      />
      <MainInfo
        btnTitle="Show"
        options={balanceInfoOptions}
        title="Баланс"
        openActivePage={toggleActivePage}
        activePage="balance"
      />
      <OpenHistoryBtns />
    </section>
  );
};
