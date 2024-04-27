import "./App.css";
import React from 'react'
import ListofTransactions from './components/ListofTransactions';
import Form from './components/Form'
import Search from "./components/Search";
let fetchedTransactions=[
  {date: "2019-12-01", description:"Paycheck from Bob's Burgers", category:"Income", amount: 1000, },
  {date: "2019-12-01", description:"South by Southwest Quinoa Bowl at Fresh & Co", category:"Food", amount: -10.55, },
  {date: "2019-12-02", description:"South by Southwest Quinoa Bowl at Fresh & Co", category:"Food", amount: -10.55, },
  {date: "2019-12-04", description:"Sunglasses, Urban Outfitters", category:"Fashion", amount: -24.99, },
  {date: "2019-12-06", description:"Venmo, Alice Pays you for Burrito", category:"Food", amount: 8.75, },
  {date: "2019-12-06", description:"Chipotle", category:"Food", amount: -17.59 },
]
function App() {
  return(
    <div>
      <Search/>
      <Form/>
      <ListofTransactions transactions={fetchedTransactions}/>
    </div>
  )
  
}

export default App;
