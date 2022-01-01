import React from 'react'
import Budget from './Budget'

// hooks
import useBudget from '../../hooks/useBudget'

function Wrapper(props) {
  const { budget } = useBudget()
  return <Budget {...props} {...budget} />
}

export default Wrapper
