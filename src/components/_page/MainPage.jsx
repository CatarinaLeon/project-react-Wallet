import React from 'react'
import MainInfo from '../_MainInfo/MainInfo'
import OpenHistoryBtns from '../OpenHistoryBtns/OpenHistoryBtns'
import {costsInfoOptions,incomesInfoOptions,balanceInfoOptions} from '../../assets/options/mainInfoOptions.json'
export const MainPage = () => {
    return (
        <>
            <h1>Журнал расходов</h1>
            <MainInfo btnTitle="Add" options={costsInfoOptions} title="Расходы"/>
            <MainInfo btnTitle="Add" options={incomesInfoOptions} title="Доходы"/>
            <MainInfo btnTitle="Show" options={balanceInfoOptions} title="Баланс" />
            <OpenHistoryBtns/>
        </>
    )
}
