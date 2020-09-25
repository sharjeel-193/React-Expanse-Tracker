import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { GlobalProvider } from './Contexts/GlobalState';
import Balance from './Components/Balance';
import AccountSummary from './Components/AccountSummary';
import TransactionHistory from './Components/TransactionHistory';
import AdTransaction from './Components/AdTransactions';
import Footer from './Components/Footer';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
      <Header />
      <div id="main">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AdTransaction />
      </div>
      <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
