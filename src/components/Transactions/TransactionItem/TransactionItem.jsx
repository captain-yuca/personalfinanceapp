import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import TransactionField from '../TransactionField/TransactionField'

// styles
import { Wrapper } from './TransactionItem.styles'

function TransactionItem({ transaction, modifyTransaction }) {
  return (
    <tr>
      <TransactionField fieldType="" fieldValue={transaction.account} />
      <TransactionField fieldType="" fieldValue={transaction.date} />
      <TransactionField fieldType="" fieldValue={transaction.payee} />
      <TransactionField fieldType="" fieldValue={transaction.budgetGroupAndItem} />
      <TransactionField fieldType="" fieldValue={transaction.notes} />
      <TransactionField fieldType="" fieldValue={transaction.outflow} />
      <TransactionField fieldType="" fieldValue={transaction.inflow} />
    </tr>
  )
}

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string,
    account: PropTypes.string,
    date: PropTypes.string,
    payee: PropTypes.string,
    budgetGroupAndItem: PropTypes.string,
    notes: PropTypes.string,
    outflow: PropTypes.string,
    inflow: PropTypes.string,
  }),
  modifyTransaction: PropTypes.func.isRequired,
}

export default TransactionItem
