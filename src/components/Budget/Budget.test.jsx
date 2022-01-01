import React from 'react'
import { render } from '../../test.utils'

import Budget from './Budget'

describe('Budget component', () => {
  it('should render correctly', () => {
    const { container } = render(<Budget />)
    expect(container).toMatchSnapshot()
  })
})
