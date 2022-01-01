import React from 'react'
import PropTypes from 'prop-types'

// styles
import { Wrapper } from './Budget.styles'
import BudgetGroup from './BudgetGroup'

function Budget({ budgetGroups }) {
  if (!budgetGroups.length) return <div className="empty">No todos :)</div>

  return (
    <Wrapper>
      {budgetGroups.map(group => (
        <BudgetGroup key={group.id} budgetGroup={group} />
      ))}
    </Wrapper>
  )
}

Budget.propTypes = {
  budgetGroups: PropTypes.array,
}

export default Budget
