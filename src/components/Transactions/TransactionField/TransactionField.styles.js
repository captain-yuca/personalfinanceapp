import styled from 'styled-components'

export const Wrapper = styled.div``

export const StaticField = styled.td`
  display: ${props => (props.isHidden ? 'none' : 'table-cell')};
`

export const EditableField = styled.input`
  display: ${props => (props.isHidden ? 'none' : 'table-cell')};
`
