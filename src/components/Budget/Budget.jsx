import React from 'react'
import PropTypes from 'prop-types'

// styles
import { Wrapper } from './Budget.styles'
import BudgetGroup from './BudgetGroup'

function Budget({ budget, modifyAssigned }) {
  const { budgetGroups } = budget
  if (!budgetGroups.length) return <div className="empty">No todos :)</div>

  return (
    <div className="container">
      <Wrapper>
        {budgetGroups.map(group => (
          <BudgetGroup key={group.id} budgetGroup={group} modifyAssigned={modifyAssigned} />
        ))}
      </Wrapper>
    </div>
  )
}

Budget.propTypes = {
  budget: PropTypes.object,
  budgetGroups: PropTypes.array,
  modifyAssigned: PropTypes.func.isRequired,
}

export default Budget
