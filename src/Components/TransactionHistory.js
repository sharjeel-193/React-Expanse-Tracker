import React,{useContext} from 'react';
import '../Styles/TransactionHistory.css'
import {GlobalContext} from '../Contexts/GlobalState'
import Transaction from './Transaction';

export default function TransactionHistory() {
    
    const {transactions} = useContext(GlobalContext);


    return (
        <div id="history-div">
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    );
}
