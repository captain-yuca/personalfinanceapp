import React from 'react'
import Transactions from './Transactions'
// hooks
import useTransactions from '../../hooks/useTransactions'

function Wrapper(props) {
  const { transactions } = useTransactions()
  return <Transactions {...props} {...transactions} />
}

export default Wrapper
