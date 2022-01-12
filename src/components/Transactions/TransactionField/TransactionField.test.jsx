import React from 'react'
import { render } from '../../../test.utils'

import TransactionField from './TransactionField'

describe('TransactionField component', () => {
  it('should render correctly', () => {
    const { container } = render(<TransactionField />)
    expect(container).toMatchSnapshot()
  })
})
