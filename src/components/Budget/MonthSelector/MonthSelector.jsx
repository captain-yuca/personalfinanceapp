import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Picker from 'react-month-picker'
import Icon from '@mdi/react'
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'
// styles
import { Wrapper } from './MonthSelector.styles'

const calOptions = {
  dateFormat: 'MM-yyyy',
  type: 'date',
  isRange: false,
}
// eslint-disable-next-line react/prop-types
function MonthSelector({ className }) {
  const [date, setDate] = useState({ year: 2014, month: 11 })
  const pickAMonth = useRef(null)

  const pickerLang = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    from: 'From',
    to: 'To',
  }

  const moveToNextMonth = () => {
    if (date.month === 12) {
      setDate({ year: date.year + 1, month: 1 })
    } else {
      setDate({ year: date.year, month: date.month + 1 })
    }
  }

  const moveToPreviousMonth = () => {
    if (date.month === 1) {
      setDate({ year: date.year - 1, month: 12 })
    } else {
      setDate({ year: date.year, month: date.month - 1 })
    }
  }

  const makeText = m => {
    if (m && m.year && m.month) return `${pickerLang.months[m.month - 1]}. ${m.year}`
    return '?'
  }

  const handleClickMonthBox = e => {
    pickAMonth.current.show()
  }

  const handleAMonthDismiss = value => {
    setDate(value)
  }

  return (
    <div className="edit">
      <span onClick={moveToPreviousMonth} onKeyPress={moveToPreviousMonth} role="button" tabIndex="0" className="icon">
        <Icon path={mdiArrowLeft} />
      </span>
      <Picker ref={pickAMonth} value={date} lang={pickerLang.months} onDismiss={handleAMonthDismiss}>
        <div onClick={handleClickMonthBox} onKeyPress={handleClickMonthBox} role="button" tabIndex="0">
          {makeText(date)}
        </div>
      </Picker>
      <span onClick={moveToNextMonth} onKeyPress={moveToNextMonth} role="button" tabIndex="0" className="icon">
        <Icon path={mdiArrowRight} />
      </span>
    </div>
  )
}

MonthSelector.propTypes = {}

export default MonthSelector
