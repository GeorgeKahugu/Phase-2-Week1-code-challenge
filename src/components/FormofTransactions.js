// import useState
import { useState } from "react";

// Form
const FormofTransactions = ({ includeTransaction }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

// handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      amount: parseFloat(amount),
      description,
      category,
    };
    includeTransaction(newTransaction);
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
        <label>Date:</label>
        <div>
          <input
            type="date"
            className="edit"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
{/* Form input of Description */}
        <div >
          <input
            type="text"
            className="edit"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

{/* Form input of Category */}
        <div>
          <input
            type="text"
            className="edit"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

{/* Form of Amount  */}
        <div>
          <input
            type="number"
            className="edit"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        </div>
        <div className="button">
          <button type="submit">Add Transaction </button>
        </div>
      </form>
    </div>
  );
};

export default FormofTransactions;
