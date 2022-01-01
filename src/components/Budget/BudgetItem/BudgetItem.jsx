import React from 'react'
import PropTypes from 'prop-types'

// styles
import Icon from '@mdi/react'
import { mdiArrowDownBold } from '@mdi/js'
import { Wrapper } from './BudgetItem.styles'

function BudgetItem({ budgetItem }) {
  return (
    <div className="block">
      <div className="level">
        <div className="level-left">{budgetItem.name}</div>
        <div className="level-right">
          <div className="level-right">
            <div className="columns">
              <div className="column">
                <span>{budgetItem.assigned}</span>
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
    name: PropTypes.string,
    assigned: PropTypes.string,
    activity: PropTypes.string,
    available: PropTypes.string,
  }),
}

export default BudgetItem
