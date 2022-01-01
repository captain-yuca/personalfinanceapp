import React from 'react'
import { render } from '../../test.utils'

import Transactions from './Transactions'

describe('Transactions component', () => {
  it('should render correctly', () => {
    const { container } = render(<Transactions />)
    expect(container).toMatchSnapshot()
  })
})
