import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// styles
import Icon from '@mdi/react'
import { mdiArrowDownBold } from '@mdi/js'
import { Wrapper, AssignedValue, AssignedInput } from './BudgetItem.styles'

function BudgetItem({ budgetItem, modifyAssigned }) {
  const [isHidden, setIsHidden] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    // Update the document title using the browser API
  })

  const updateAssigned = (id, value) => {
    setIsHidden(false)
    modifyAssigned(id, value)
  }

  return (
    <div className="block">
      <div className="level">
        <div className="level-left">{budgetItem.name}</div>
        <div className="level-right">
          <div className="level-right">
            <div className="columns">
              <div className="column">
                <AssignedInput
                  isHidden={!isHidden}
                  onBlur={() => updateAssigned(budgetItem.id, inputRef.current.value)}
                  ref={inputRef}
                  className="input is-primary"
                  type="text"
                  placeholder="Primary input"
                />
                <AssignedValue isHidden={isHidden} onClick={() => setIsHidden(true)}>
                  {budgetItem.assigned}
                </AssignedValue>
              </div>
              <div className="column">
                <span>{budgetItem.activity}</span>
              </div>
              <div className="column">
                <span>{budgetItem.available}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BudgetItem.propTypes = {
  budgetItem: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    assigned: PropTypes.string,
    activity: PropTypes.string,
    available: PropTypes.string,
  }),
  modifyAssigned: PropTypes.func.isRequired,
}

export default BudgetItem
