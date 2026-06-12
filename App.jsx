import './App.css'
import React, { useState } from 'react';
function App() {
  // Add your code here
  const [balance, setBalance] = useState();
  const [rate, setRate] = useState();
  const [term, setTerm] = useState(30);
  const [output, setOutput] = useState('');
const calculate = (balance, rate, term) => {
    // Mortgage Calculation Logic:
    const monthlyRate = (rate / 100) / 12;
    const numberOfPayments = term * 12;
    
    const monthlyPayment = 
      (balance * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setOutput(`$${monthlyPayment.toFixed(2)} is your payment`);
  };
  return (
    <>
      <h1>Mortgage Calculator</h1>
      
      <label>Loan Balance</label>
      <input 
      type="number" 
      data-testid="balance" 
      value={balance} 
      onChange={(e) => setBalance(parseFloat(e.target.value) || 0)} />

      <label>Interest Rate</label>
      <input type="number" data-testid="rate" step="0.01" value={rate} onChange={(e) => setRate(parseFloat(e.target.value) || 0)} />

      <label>Loan Term</label>
      <select data-testid="term" value={term} onChange={(e) => setTerm(parseInt(e.target.value))}>
        <option value="15">15</option>
        <option value="30">30</option>
      </select>

      <button 
      data-testid="submit" 
      onClick={() => calculate(balance, rate, term)}>
        Calculate</button>

      <div id="output" data-testid="output">
        {output}</div>
    </>
  );
}

export default App