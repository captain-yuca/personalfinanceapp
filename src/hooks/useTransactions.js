import { useMap, useMount, useUpdateEffect } from 'react-use'

import { loadState, saveState } from '../utils/localStorage'

const useTransactions = (key = 'TRANSACTIONS') => {
  const [transactions, transactionsActions] = useMap({
    transactions: [],
  })
  const getInitialTransactions = () => {
    // const state = loadState(key)
    const state = {
      transactions: [
        {
          id: 1,
          account: 'AMEX Platinum',
          date: '12/02/2021',
          payee: 'Walgreens',
          budgetGroupAndItem: 'Just for Fun: Travel',
          notes: '',
          outflow: '$400.00',
          inflow: '$200.15',
        },
        {
          id: 2,
          account: 'AMEX Platinum',
          date: '12/02/2021',
          payee: 'Walgreens',
          budgetGroupAndItem: 'Just for Fun: Travel',
          notes: '',
          outflow: '$400.00',
          inflow: '$200.15',
        },
        {
          id: 3,
          account: 'AMEX Platinum',
          date: '12/02/2021',
          payee: 'Walgreens',
          budgetGroupAndItem: 'Just for Fun: Travel',
          notes: '',
          outflow: '$400.00',
          inflow: '$200.15',
        },
      ],
    }
    transactionsActions.setAll(state)
  }

  useMount(() => {
    getInitialTransactions()
  })

  return {
    transactions,
  }
}

export default useTransactions
