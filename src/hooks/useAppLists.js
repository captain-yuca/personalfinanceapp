import { useMap, useMount, useUpdateEffect } from 'react-use'
import { api } from '../config'

import { loadState, saveState } from '../utils/localStorage'

const ACCOUNT_URL = '/accounts'
const BUDGET_GROUPS_URL = '/budgetGroups?_embed=budgetItems'
const PAYEES_URL = '/payees'

const ACCOUNTS_KEY = 'accounts'
const BUDGET_GROUPS_KEY = 'budgetGroups'
const PAYEES_KEY = 'payees'
const URL_MAPPING = {
  [ACCOUNTS_KEY]: ACCOUNT_URL,
  [BUDGET_GROUPS_KEY]: BUDGET_GROUPS_URL,
  [PAYEES_KEY]: PAYEES_URL,
}

const useAppLists = (key = 'LISTS') => {
  const [appLists, listActions] = useMap({
    accounts: [],
    budgetGroups: [],
    payees: [],
  })

  const getInitialLists = async () => {
    const accounts = (await api.get(ACCOUNT_URL)).data
    const budgetGroups = (await api.get(BUDGET_GROUPS_URL)).data
    const payees = (await api.get(PAYEES_URL)).data

    listActions.setAll({
      accounts,
      budgetGroups,
      payees,
    })
  }

  const searchAppList = async (resource, searchTerm) => {
    if (searchTerm === '') {
      await getInitialLists()
      return
    }

    const url = URL_MAPPING[resource]
    const state = (await api.get(`${url}&q=${searchTerm}`)).data

    listActions.set(resource, state)
  }
  useMount(() => {
    getInitialLists()
  })

  return {
    appLists,
    searchAppList,
  }
}

export default useAppLists
