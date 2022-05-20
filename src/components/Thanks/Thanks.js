import React, { useEffect, useState } from 'react'
import { enableScroll, disableScroll } from '../../utils/EnableDisableScroll'

export default function Thanks({ show, showToggle }) {

  const [isScrollDis,setIsScrollDis] = useState(false)

  useEffect(() => {

    if( show && !isScrollDis ) {
      disableScroll()
      setIsScrollDis(true)
    } else if ( !show && isScrollDis ) {
      enableScroll()
      setIsScrollDis(false)
    }

  }, [show])

  return (
    <>
      { show &&
          <div className="thanks-container" onClick={ () => showToggle()}>
            <h2>Thanks!</h2>
            <p>We received your message. Our team will be in touch with as soon as possible</p>
          </div>
      }
    </>
  )
}
