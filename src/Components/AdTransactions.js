import React,{useContext,useState} from 'react';
import '../Styles/AddTransaction.css'
import {GlobalContext} from '../Contexts/GlobalState'
let idkey = 1;


export default function AdTransaction() {
    
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const {addTransaction} = useContext(GlobalContext);
    

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: idkey,
            description,
            transactionAmount: +transactionAmount,
            
        }
        idkey = idkey+1;
        addTransaction(newTransaction);
        
    }

    return (
        <div id="add-new-transaction-div">
            <h3 className="form-heading">Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            id="description"
                            name="desc"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Detail of Transaction" 
                            required="required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionamount"
                            name="amount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder="Value of Transaction"
                            required="required"
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
}
