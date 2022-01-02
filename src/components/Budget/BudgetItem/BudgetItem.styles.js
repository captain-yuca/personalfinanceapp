import styled from 'styled-components'

export const Wrapper = styled.div``

export const AssignedValue = styled.div`
  display: ${props => (props.isHidden ? 'none' : 'block')};
`

export const AssignedInput = styled.input`
  display: ${props => (props.isHidden ? 'none' : 'block')};
`
