import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getDeepProperty } from '../../utils/getDeepProperty'

// styles
import { Wrapper, ButtonLikeLink, PopupContainer } from './SelectPopup.styles'

const defaultMappings = {
  name: 'Title',
  subItemsKey: 'budgetItems',
  subItemsTextKey: 'name',
  subItemsValueKey: 'id',
}
function SelectPopup({
  title = 'Title',
  isHidden = true,
  items,
  mappings = defaultMappings,
  selectHandler,
  setDidClickOutsidePopup,
  setDidDoSelection,
}) {
  const ref = useRef(null)
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && (!ref.current.contains(event.target) || event.target.classList.contains('selectable'))) {
        if (event.target.classList.contains('selectable')) {
          setDidDoSelection(true)
        }
        setDidClickOutsidePopup(true)
      } else {
        setDidClickOutsidePopup(false)
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
  const selectSomething = selectedItem => {
    selectHandler(selectedItem)
    setDidClickOutsidePopup(true)
  }

  const setLayout = (type, item) => {
    switch (type) {
      case 'SimpleList':
        return (
          <div>
            <ButtonLikeLink
              type="button"
              onClick={() => selectSomething(item[mappings.input.updateValueKey])}
              className="panel-block selectable"
            >
              <p className="ml-4 selectable">{getDeepProperty(mappings.input.fieldValueKey, item)}</p>
            </ButtonLikeLink>
          </div>
        )
      case 'NestedList':
        return (
          <div>
            <h3 className="panel-block has-text-weight-bold">{item[mappings.input.titleKey]}</h3>
            {item[mappings.input.listKey].map(subItem => (
              <ButtonLikeLink
                type="button"
                onClick={() => selectSomething(subItem[mappings.input.updateValueKey])}
                className="panel-block selectable"
              >
                <p className="ml-4 selectable">{getDeepProperty(mappings.input.fieldValueKey, subItem)}</p>
              </ButtonLikeLink>
            ))}
          </div>
        )
      default:
        return <div />
    }
  }

  return (
    <PopupContainer isHidden={isHidden} className="panel is-link" ref={ref}>
      <p className="panel-heading">{title}</p>
      {items.map(item => setLayout(mappings.inputType.type, item))}
    </PopupContainer>
  )
}

SelectPopup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  mappings: PropTypes.object,
  selectHandler: PropTypes.func,
  isHidden: PropTypes.bool,
  setDidClickOutsidePopup: PropTypes.func,
  setDidDoSelection: PropTypes.func,
}
export default SelectPopup
