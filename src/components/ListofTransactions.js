import React from "react";

const ListofTransactions=({transactions}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction,index)=>(
                        <tr key={index}>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
