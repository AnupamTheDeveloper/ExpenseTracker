import React from 'react'
import './App.css'
import Header from './assets/header'; 
import Balance from './assets/balance';
import IncomeExpenses from './assets/IncomeExpenses';
import TransactionList from './assets/TransactionList';
import AddTransaction from './assets/AddTransaction';
import { GlobalProvider } from './context/GolbalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App
