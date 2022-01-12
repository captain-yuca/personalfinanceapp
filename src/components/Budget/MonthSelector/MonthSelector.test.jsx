import React from 'react'
import { render } from '../../test.utils'

import MonthSelector from './MonthSelector'

describe('MonthSelector component', () => {
  it('should render correctly', () => {
    const { container } = render(<MonthSelector />)
    expect(container).toMatchSnapshot()
  })
})
