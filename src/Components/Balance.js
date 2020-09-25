import React, {useContext} from 'react';
import '../Styles/Balance.css'
import {GlobalContext} from '../Contexts/GlobalState'

export default function Balance() {
    
    const {transactions} = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div id="balance-div">
            <h2>CURRENT BALANCE</h2>
            <h2>Rs. {balance}</h2>
        </div>
    );
}
