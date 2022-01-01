import React from 'react'

import PropTypes from 'prop-types'

// styles
import Icon from '@mdi/react'
import { mdiArrowDownBold } from '@mdi/js'
import BudgetItem from '../BudgetItem'
import { Wrapper } from './BudgetGroup.styles'

function BudgetGroup({ budgetGroup }) {
  return (
    <div>
      <div className="block">
        <div className="level">
          <div className="level-left">
            <span className="icon">
              <Icon path={mdiArrowDownBold} />
            </span>
            {budgetGroup.name}
          </div>
          <div className="level-right">
            <div className="columns">
              <div className="column">
                <span>{budgetGroup.assigned}</span>
              </div>
              <div className="column">
                <span>{budgetGroup.activity}</span>
              </div>
              <div className="column">
                <span>{budgetGroup.available}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {budgetGroup.budgetItems.map(item => (
        <BudgetItem key={item.id} budgetItem={item} />
      ))}
    </div>
  )
}

BudgetGroup.propTypes = {
  budgetGroup: PropTypes.shape({
    name: PropTypes.string,
    assigned: PropTypes.string,
    activity: PropTypes.string,
    available: PropTypes.string,
    budgetItems: PropTypes.array,
  }),
}

export default BudgetGroup
