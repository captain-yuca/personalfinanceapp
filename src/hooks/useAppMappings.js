import { useMap, useMount, useUpdateEffect } from 'react-use'
import { api } from '../config'

import { loadState, saveState } from '../utils/localStorage'

const useAppMappings = (key = 'MAPPINGS') => {
  const [mappings, mappingActions] = useMap({
    transactionFields: [],
  })

  const getMappings = async () => {
    const transactionFields = (await api.get('/transactionFieldMappings?_expand=inputType')).data
    mappingActions.setAll({
      transactionFields,
    })
  }

  const getMappingByField = field => {
    const seekedMapping = mappings.transactionFields.find(m => m.updateValueKey.toLowerCase() === field.toLowerCase())
    return seekedMapping
  }
  useMount(() => {
    getMappings()
  })

  return {
    mappings,
    getMappingByField,
  }
}

export default useAppMappings
