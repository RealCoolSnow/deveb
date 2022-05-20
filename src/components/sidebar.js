import React from 'react'
import {links} from '../utils/constans'
const Sidebar = ()=>{
  let isOpen= false;
  return (
    <div>
    {links.map((link)=>{
        const {id, text, url} = link;
        return (
          <Link to={url} key={id}>{text}</Link>
        )
    })}

    </div>
  )
}
