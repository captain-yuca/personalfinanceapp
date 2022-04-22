import React from 'react'
import Transactions from './Transactions'
// hooks
import useTransactions from '../../hooks/useTransactions'
import useAppMappings from '../../hooks/useAppMappings'
import useAppLists from '../../hooks/useAppLists'

function Wrapper(props) {
  const transactions = useTransactions()
  const { mappings, getMappingByField } = useAppMappings()
  const lists = useAppLists()
  return (
    <Transactions
      {...props}
      {...transactions}
      {...lists}
      mappings={mappings.transactionFields}
      getMappingByField={getMappingByField}
    />
  )
}

export default Wrapper
