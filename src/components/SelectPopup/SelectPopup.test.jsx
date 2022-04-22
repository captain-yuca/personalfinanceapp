import React from 'react'
import { render } from '../../test.utils'

import SelectPopup from './SelectPopup'

describe('SelectPopup component', () => {
  it('should render correctly', () => {
    const { container } = render(<SelectPopup />)
    expect(container).toMatchSnapshot()
  })
})
