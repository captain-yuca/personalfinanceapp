import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// styles
import { StaticField, EditableField } from './TransactionField.styles'

function TransactionField({ fieldType, fieldValue }) {
  const [isHidden, setIsHidden] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  const updateAssigned = value => {
    setIsHidden(false)
  }
  // Update the document title using the browser API
  return (
    <div style={{ display: 'table-cell' }}>
      <StaticField isHidden={isHidden} onClick={() => setIsHidden(true)}>
        {fieldValue}
      </StaticField>
      <EditableField
        isHidden={!isHidden}
        onBlur={() => updateAssigned(inputRef.current.value)}
        ref={inputRef}
        value={fieldValue}
        className="input is-primary"
        type="text"
        placeholder="Primary input"
      />
    </div>
  )
}

TransactionField.propTypes = {
  fieldType: PropTypes.string,
  fieldValue: PropTypes.string,
}

export default TransactionField
