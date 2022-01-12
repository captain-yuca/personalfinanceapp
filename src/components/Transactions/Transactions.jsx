import React from 'react'
import PropTypes from 'prop-types'

// styles
import { Wrapper } from './Transactions.styles'
import TransactionItem from './TransactionItem/TransactionItem'

function Transactions({ transactions }) {
  return (
    <table className="table is-fullwidth is-hoverable">
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
          <TransactionItem transaction={item} />
        ))}
      </tbody>
    </table>
  )
}

Transactions.propTypes = {
  transactions: PropTypes.array,
}

export default Transactions
