import React from 'react'
import { render } from '../../test.utils'

import BudgetItem from './BudgetItem'

describe('BudgetItem component', () => {
  it('should render correctly', () => {
    const { container } = render(<BudgetItem />)
    expect(container).toMatchSnapshot()
  })
})
