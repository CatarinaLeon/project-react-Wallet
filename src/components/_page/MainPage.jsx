import React from 'react'
import MainInfo from '../_MainInfo/MainInfo'
import OpenHistoryBtns from '../OpenHistoryBtns/OpenHistoryBtns'
import { costsInfoOptions, incomesInfoOptions, balanceInfoOptions } from '../../assets/options/mainInfoOptions.json'

export const MainPage = ({openActivePage}) => {
    return (
        <section style={{width:'400px', margin: '0 auto'}}>
            <h1>Журнал расходов</h1>
            <MainInfo
                btnTitle="Add"
                options={costsInfoOptions}
                title="Расходы"
                openActivePage={openActivePage}
                activePage='costs'
            />
            <MainInfo
                btnTitle="Add" options={incomesInfoOptions}
                title="Доходы"
                openActivePage={openActivePage}
                activePage='incomes'
            />
            <MainInfo
                btnTitle="Show"
                options={balanceInfoOptions}
                title="Баланс"
                openActivePage={openActivePage}
                activePage='balance'
            />
            <OpenHistoryBtns/>
        </section>
    )
}
