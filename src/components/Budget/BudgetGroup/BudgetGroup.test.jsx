import React from 'react'
import { render } from '../../test.utils'

import BudgetGroup from './BudgetGroup'

describe('BudgetGroup component', () => {
  it('should render correctly', () => {
    const { container } = render(<BudgetGroup />)
    expect(container).toMatchSnapshot()
  })
})
