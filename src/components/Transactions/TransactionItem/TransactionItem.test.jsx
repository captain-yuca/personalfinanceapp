import React from 'react'
import { render } from '../../test.utils'

import TransactionItem from './TransactionItem'

describe('TransactionItem component', () => {
  it('should render correctly', () => {
    const { container } = render(<TransactionItem />)
    expect(container).toMatchSnapshot()
  })
})
