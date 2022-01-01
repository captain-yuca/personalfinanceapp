import React from 'react'
import Helmet from 'react-helmet'

import Main from '../components/Main'
import Budget from '../components/Budget'

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Home page | React MAD Boiler</title>
      </Helmet>
      <Budget />
    </>
  )
}
