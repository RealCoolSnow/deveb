import React, {useEffect, useContext, useReducer} from 'react';
import {menuReducer} from './reducers.js';

const initState ={
  isMenuOpen: false,
  pageTitle: 'home',
  footerItems: {},
  ScrollYValue:0,
  needed:[],
  isMobile: "",
  refresh: false,
  contact:"other",
  aniClick: false,
  pointer: {
    isHover: false, 
    color: "",
    text: "",
  },
  resetLoco:false,
}

const AppContext = React.createContext();

export const AppProvider=({children})=>{

  const [state, dispatch] = useReducer(menuReducer, initState);

  const openMenu =()=>{
    dispatch({type:'OPEN_MENU'})
  }

  const closeMenu =()=>{
    dispatch({type:'CLOSE_MENU'})
  }

  const setMobileTrue =()=>{
    dispatch({type:'SET_MOBILE_TRUE'})
  }
  // const changeRefresh= ()=>{
  //   dispatch({type:'SCROLLED' , payload:sy})
  // }
  const setMobileFalse =()=>{
    dispatch({type:'SET_MOBILE_FALSE'})
  }

  const scrollY =(sy)=>{
      dispatch({type:'SCROLLED' , payload:sy})
  }
  const updateNeeded =(pay)=>{
 
      dispatch({type:'LOCONEEDED' , payload:pay})
  }
  const changePT = (pay)=>{
    dispatch({type: 'CHANGETITLE', payload: pay})
  }
  const changePointer = (pay)=>{
    dispatch({type: 'CHANGEHOVER', payload: pay})
  }
  const changeScPointer = (pay)=>{
    dispatch({type: 'CHANGEPOINTER', payload: pay})
  }
  const changePp = (pay)=>{
    dispatch({type: 'CHANGECONBTN', payload: pay})
  }
  const setReset =()=>{
    dispatch({type:'RESET_LOCO', })
  }
  const setaniClick =()=>{
    dispatch({type:'SET_ANI', })
  }

  return(
    <AppContext.Provider value={{ ...state, openMenu, closeMenu, setMobileTrue,
      setMobileFalse, scrollY, updateNeeded, changePT, changePointer,changeScPointer, changePp, setReset, setaniClick}}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = ()=>{
  return useContext(AppContext)
}