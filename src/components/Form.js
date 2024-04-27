import {useState} from "react";

const Form=({includeTransaction})=>{
    const [date,setDate]=useState('');
    const[description,setDescription]=useState('');
    const[category,setCategory]=useState('');
    const[amount,setAmount]=useState('');

const handleSubmit=(e) => {
    e. preventDefault();
    const newTransaction={
        date,
        amount: parseFloat(amount),
        description,
        category,
    };
    includeTransaction(newTransaction);
    setDate('');
    setDescription('');
    setCategory('')
    setAmount('')

};


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>

                
                <input type="text" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)}/>

                <input type="text" placeholder="Category" value={category} onChange={(e)=> setCategory(e.target.value)}/>

                <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>

                <button type="submit">Add Transaction </button>
            </form>
        </div>
    )

};


export default Form