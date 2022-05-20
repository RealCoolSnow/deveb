import React from 'react'
import { useAppContext } from '../contexts/appcontext'

export default function HeroScroll() {
  const {ScrollYValue} = useAppContext();
  return (
    <div className="hero-scroll" data-scroll>
    {/* {
      ScrollYValue === 0 && ( */}
        <>
        <span>Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="12.795" viewBox="0 0 7.667 12.795">
          <path id="Path_295" data-name="Path 295" d="M.361,7.307a1.25,1.25,0,0,0,.21.167l4.959,4.959a1.239,1.239,0,0,0,1.753-1.753L3.011,6.409,7.3,2.116A1.239,1.239,0,1,0,5.552.363L.571,5.345a1.286,1.286,0,0,0-.21,1.962Z" transform="translate(0 0)" fill="#f5f5f7"/>
        </svg>
        </>
  {/* )
} */}
</div>

  )
}
