import React from 'react'
import TransactionForm from '../../TransactionForm/TransactionForm'
import GoBackHeader from '../../_shared/GoBackHeader/GoBackHeader'



function TransactionPage({closeTransactionPage,addData}) {
    return (
        <section style={{width:'400px', margin: '0 auto'}}>
            <GoBackHeader handleGoBack={closeTransactionPage} />
            <TransactionForm addData={addData}/>
        
        </section>
    )
}

export default TransactionPage
