
export const menuReducer = (state, action)=>{
  if (action.type === 'OPEN_MENU'){
    return {...state, isMenuOpen:true}
  }

  if (action.type === 'CLOSE_MENU'){
   return {...state, isMenuOpen:false}
  }

  if (action.type === 'SET_MOBILE_TRUE'){
   return {...state, isMobile: true}
  }
  if (action.type === 'CHANGETITLE'){
    return {...state, pageTitle: action.payload}
   }
  if (action.type === 'SET_MOBILE_FALSE'){
   return {...state, isMobile: false}
  }
  // if (action.type === 'SCROLLED'){
  //  return {...state, ScrollYValue: action.payload}
  // }
  if (action.type === 'CHANGEHOVER'){
    return {...state, pointer: action.payload}
   }
  // 
  if(action.type === "SCROLLED"){
    return {...state, ScrollYValue: action.payload}
  }
  if(action.type === "CHANGECONBTN"){
    console.log(action.payload)
    return {...state, contact: action.payload}
  }
  return state;
}
