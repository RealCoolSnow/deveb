import React, { useEffect, useState } from 'react'
import { enableScroll, disableScroll } from '../../utils/EnableDisableScroll'

export default function Thanks({ showToggle }) {

  return (
    <div className="thanks-container" onClick={ () => showToggle()}>
      <h2>Thanks!</h2>
      <p>You will hear back from us shortly.</p>
    </div>
  )
}
