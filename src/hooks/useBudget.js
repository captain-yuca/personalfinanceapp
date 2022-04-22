import { useMap, useMount, useUpdateEffect } from 'react-use'
import { api } from '../config'

import { loadState, saveState } from '../utils/localStorage'

const useBudget = (key = 'BUDGET') => {
  const [budget, budgetActions] = useMap({
    budgetGroups: [],
  })

  const getInitialBudget = async () => {
    // const state = loadState(key)
    const state = (await api.get('/budgetGroups')).data
    budgetActions.setAll({ budgetGroups: state })
  }
  const modifyAssigned = (id, amount) => {
    // Here
  }
  useMount(() => {
    getInitialBudget()
  })

  return {
    budget,
    modifyAssigned,
  }
}

export default useBudget
