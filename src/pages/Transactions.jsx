import React from 'react'
import Helmet from 'react-helmet'

import Transactions from '../components/Transactions'

export default function TransactionsPage() {
  return (
    <>
      <Helmet>
        <title>Transactions | React MAD Boiler</title>
      </Helmet>
      <Transactions />
    </>
  )
}
