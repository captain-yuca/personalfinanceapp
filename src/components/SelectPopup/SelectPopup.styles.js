import styled from 'styled-components'

export const Wrapper = styled.div``

export const PopupContainer = styled.article`
  display: ${props => (props.isHidden ? 'none' : 'block')};
  position: absolute;
  width: 30%;
`
export const ButtonLikeLink = styled.button`
  background: none;
  border: none;
  /*optional*/
  /*input has OS specific font-family*/
  appearance: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #f5f5f5;
  }
`
