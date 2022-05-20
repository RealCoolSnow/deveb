import React, { useState, useEffect } from 'react'

export default function ThemeSwitch() {

  const [currentTheme,setCurrentTheme] = useState('dark')

  const colorPallests = {
    dark: {
      '--bg-color': '#000',
      '--primary-color' : '#fff',
      '--primary-font-color' : '#f5f5f7',
      '--secondary-font-color' : '#b9b9bf',
      '--light-menu-link-color' : '#a1a1a6',
      '--lighter-menu-link-color' : '#d7d7d9',
      '--lightwhite' : '#D7D7D9',
      '--light-font-color' : '#6e6e6e',
      '--lighter-font-color' : '#6e6e73',
      '--button-bg-color' : '#f5f5f7',
      '--button-bg-active-color' : '#2997ff',
      '--button-primary-color' : '#191919',
      '--button-border-color' : '#6e6e73',
    },
    light: {
      '--bg-color' : '#fff',
      '--primary-color' : '#000',
      '--primary-font-color' : '#111',
      '--secondary-font-color' : '#b9b9bf',
      '--light-menu-link-color' : '#a1a1a6',
      '--lighter-menu-link-color' : '#d7d7d9',
      '--lightwhite' : '#D7D7D9',
      '--light-font-color' : '#6e6e6e',
      '--lighter-font-color' : '#6e6e73',
      '--button-bg-color' : '#111',
      '--button-bg-active-color' : '#2997ff',
      '--button-primary-color' : '#f1f1f1',
      '--button-border-color' : '#6e6e73',
    }
  }

  useEffect(() => {
    
    const theme = localStorage.getItem('theme')

    if( !theme ) {
      localStorage.setItem('theme','dark')
    } else {
      if( currentTheme !== theme ) {
        setCurrentTheme(theme)
        changeTheme(theme)
      }
    }

  }, [])

  const changeTheme = () => {

    if( currentTheme ) {

      if( currentTheme === 'dark' ) {
        setCurrentTheme('light')
        localStorage.setItem('theme','light')
        changeColorPallets('light')
      } else {
        setCurrentTheme('dark')
        localStorage.setItem('theme','dark')
        changeColorPallets('dark')
      }

    }
  }

  const changeColorPallets = (newTheme) => {

    var root = document.querySelector(':root');

    for ( const key in colorPallests[newTheme] ) {
      root.style.setProperty(key, colorPallests[newTheme][key] );
    }
  }

  return (
    <div className="theme-checkbox" onClick={changeTheme}>

      <div className={`theme-switcher ${currentTheme}`}></div>

    </div>
  )
}
