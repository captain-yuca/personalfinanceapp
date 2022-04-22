import { mdiHeadSync } from '@mdi/js'
import { useMap, useMount, useUpdateEffect } from 'react-use'
import { api } from '../config'

import { loadState, saveState } from '../utils/localStorage'

const useTransactions = (key = 'TRANSACTIONS') => {
  const [transactions, transactionsActions] = useMap({
    transactions: [],
  })
  const getInitialTransactions = async () => {
    const state = (await api.get('/transactions?_expand=budgetItem&_expand=payee&_expand=account')).data
    transactionsActions.setAll({ transactions: state })
  }

  const changeTransaction = async (transactionId, field, value) => {
    const requestBody = { [field]: value }
    await api.patch(`/transactions/${transactionId}`, requestBody)
    getInitialTransactions()
  }

  useMount(() => {
    getInitialTransactions()
  })

  return {
    transactions,
    changeTransaction,
  }
}

export default useTransactions
