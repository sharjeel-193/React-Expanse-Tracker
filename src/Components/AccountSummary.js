import React,{useContext} from 'react';
import '../Styles/AccountSummary.css'
// Import the Global State
import {GlobalContext} from '../Contexts/GlobalState'

export default function AccountSummary() {

    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    
    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);
    
    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

  return (
    <div id="account-summary-div">
            <div className="income">
                <h4>Income</h4>
                <p className="money plus">
                    {income}
                </p>
            </div>
            <div className="expanse">
                <h4>Expense</h4> 
                <p className="money minus">
                    {expense}
                </p>
            </div>
    </div>
  );
}
