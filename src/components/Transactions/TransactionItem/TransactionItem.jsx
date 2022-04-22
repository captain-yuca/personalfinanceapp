import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import TransactionField from '../TransactionField/TransactionField'
import { getDeepProperty } from '../../../utils/getDeepProperty'
// styles
import { Wrapper } from './TransactionItem.styles'

function TransactionItem({
  transaction,
  updateTransactionField,
  canHideEditableField,
  setIsFocusedOnEditableField,
  mappings,
}) {
  const setIsFocusedOnEditableFieldAlt = (transactionId, field) => isFocused => {
    setIsFocusedOnEditableField(transactionId, field, isFocused)
  }
  const updateTransactionFieldAlt = (transactionId, field) => value => {
    updateTransactionField(transactionId, field, value)
  }
  return (
    <tr>
      {mappings.map(mapping => (
        <TransactionField
          fieldType=""
          updateValue={updateTransactionFieldAlt(transaction.id, mapping.updateValueKey)}
          fieldValue={getDeepProperty(mapping.fieldValueKey, transaction)}
          canReturnToStatic={canHideEditableField}
          setIsFocusedOnEditableField={setIsFocusedOnEditableFieldAlt(transaction.id, mapping.updateValueKey)}
        />
      ))}
    </tr>
  )
}

TransactionItem.propTypes = {
  transaction: PropTypes.object,
  updateTransactionField: PropTypes.func.isRequired,
  canHideEditableField: PropTypes.bool,
  setIsFocusedOnEditableField: PropTypes.func,
  mappings: PropTypes.object,
}

export default TransactionItem
