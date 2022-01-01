import { useMap, useMount, useUpdateEffect } from 'react-use'

import { loadState, saveState } from '../utils/localStorage'

const useBudget = (key = 'BUDGET') => {
  const [budget, budgetActions] = useMap({
    budgetGroups: [],
  })

  const getInitialBudget = () => {
    // const state = loadState(key)
    const state = {
      budgetGroups: [
        {
          id: 1,
          name: 'Sinking Funds',
          assigned: '$24.99',
          activity: '$25.00',
          available: '$40.00',
          budgetItems: [
            {
              id: 1,
              name: 'Sinking Funds',
              assigned: '$24.99',
              activity: '$25.00',
              available: '$40.00',
            },
            {
              id: 2,
              name: 'Eat Out',
              assigned: '$24.99',
              activity: '$25.00',
              available: '$40.00',
            },
            {
              id: 3,
              name: 'Video Games',
              assigned: '$24.99',
              activity: '$25.00',
              available: '$40.00',
            },
          ],
        },
      ],
    }
    budgetActions.setAll(state)
  }

  useMount(() => {
    getInitialBudget()
  })

  return {
    budget,
  }
}

export default useBudget
