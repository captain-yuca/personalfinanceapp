import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// styles
import { StaticField, EditableField } from './TransactionField.styles'
import SelectPopup from '../../SelectPopup/SelectPopup'

function TransactionField({ fieldType, fieldValue, updateValue, canReturnToStatic, setIsFocusedOnEditableField }) {
  const [isStaticFieldHidden, setIsHidden] = useState(false)
  const [inputValue, setInputValue] = useState(fieldValue)

  const inputRef = useRef(null)
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (inputRef.current && inputRef.current.contains(event.target)) {
        setIsFocusedOnEditableField(true)
        setIsHidden(true)
      }
    }

    // Bind the event listener
    document.addEventListener('click', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside)
    }
  }, [inputRef])

  const staticFieldOnClick = async () => {
    await setIsHidden(true)
    setInputValue(fieldValue)
    inputRef.current.focus()
  }

  // TODO: Send the complete state of Transaction Field instead of parts
  const onBlurHandler = () => {
    if (canReturnToStatic) {
      setIsFocusedOnEditableField(false)
      setInputValue(fieldValue)
      updateValue(inputValue)
      setIsHidden(false)
    } else if (!canReturnToStatic) {
      inputRef.current.focus()
    }
  }

  const onFocusHandler = () => {
    setIsFocusedOnEditableField(true)
  }

  // Update the document title using the browser API
  return (
    <div style={{ display: 'table-cell' }}>
      <StaticField isHidden={isStaticFieldHidden} onClick={staticFieldOnClick}>
        {fieldValue}
      </StaticField>
      <EditableField
        isHidden={!isStaticFieldHidden}
        onFocus={() => onFocusHandler()}
        onKeyUp={() => updateValue(inputRef.current.value)}
        onBlur={() => onBlurHandler()}
        ref={inputRef}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
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
  updateValue: PropTypes.func,
  canReturnToStatic: PropTypes.bool,
  setIsFocusedOnEditableField: PropTypes.func,
}

export default TransactionField
