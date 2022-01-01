import React from 'react'
import PropTypes from 'prop-types'

// styles
import { Wrapper } from './Transactions.styles'

function Transactions({ transactions }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Account</th>
          <th>Date</th>
          <th>Payee</th>
          <th>Budget Group/Item</th>
          <th>Notes</th>
          <th>Outflow</th>
          <th>Inflow</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => (
          <tr>
            <td>{item.account}</td>
            <td> {item.date}</td>
            <td> {item.payee}</td>
            <td> {item.budgetGroupAndItem}</td>
            <td> {item.notes}</td>
            <td> {item.outflow}</td>
            <td> {item.inflow}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Transactions.propTypes = {
  transactions: PropTypes.array,
}

export default Transactions
