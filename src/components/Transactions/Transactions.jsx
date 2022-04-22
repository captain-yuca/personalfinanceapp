import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// styles
import TransactionItem from './TransactionItem/TransactionItem'
import SelectPopup from '../SelectPopup/SelectPopup'

function Transactions({ transactions, appLists, searchAppList, changeTransaction, mappings, getMappingByField }) {
  const [activeTransactionId, setTransactionId] = useState(null)
  const [activeField, setActiveField] = useState(null)
  const [isFocusedOnEditableField, setIsFocusedOnEditableField] = useState(false)
  const [dataForPopup, setDataForPopup] = useState([])
  const [needsPopup, setNeedsPopup] = useState(false)
  const [activeMapping, setActiveMapping] = useState(null)
  const [selectedSomething, setSelectedSomething] = useState(false)

  const [didClickOutsidePopup, setDidClickOutsidePopup] = useState(true)

  useEffect(() => {
    if (isFocusedOnEditableField && activeTransactionId) {
      const mapping = getMappingByField(activeField)
      const { resource } = mapping
      setActiveMapping(mapping)
      if (appLists[resource]) {
        searchAppList(resource, '')
        setDataForPopup(appLists[resource])
        setNeedsPopup(true)
      } else {
        setNeedsPopup(false)
      }
    }
  }, [isFocusedOnEditableField])

  const updateFocusedState = (transactionId, field, isFocused) => {
    setIsFocusedOnEditableField(isFocused)
    setTransactionId(transactionId)
    setActiveField(field)
  }

  const updateValue = value => {
    changeTransaction(activeTransactionId, activeField, value)
    setDidClickOutsidePopup(true)
    setSelectedSomething(false)
    setNeedsPopup(false)
  }

  const updatePopup = (transactionId, field, searchTerm) => {
    const { resource } = activeMapping
    if (appLists[resource]) {
      searchAppList(resource, searchTerm)
      setDataForPopup(appLists[resource])
      setNeedsPopup(true)
    } else {
      setNeedsPopup(false)
      if (!isFocusedOnEditableField) {
        updateValue(searchTerm)
      }
    }
  }

  const showPopup =
    (isFocusedOnEditableField || selectedSomething || (!isFocusedOnEditableField && !didClickOutsidePopup)) &&
    needsPopup

  return (
    <div>
      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            {mappings.map(item => (
              <th>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.transactions.map(item => (
            <TransactionItem
              transaction={item}
              updateTransactionField={updatePopup}
              canHideEditableField={didClickOutsidePopup}
              setIsFocusedOnEditableField={updateFocusedState}
              mappings={mappings}
            />
          ))}
        </tbody>
      </table>
      <div tabIndex="-1">
        <SelectPopup
          isHidden={!showPopup}
          selectHandler={updateValue}
          items={dataForPopup}
          setDidClickOutsidePopup={setDidClickOutsidePopup}
          setDidDoSelection={setSelectedSomething}
          mappings={activeMapping}
        />
      </div>
    </div>
  )
}

Transactions.propTypes = {
  transactions: PropTypes.object,
  mappings: PropTypes.array,
  appLists: PropTypes.object,
  searchAppList: PropTypes.func,
  getMappingByField: PropTypes.func,
  changeTransaction: PropTypes.func,
}

export default Transactions
