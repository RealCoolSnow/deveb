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
      return {...state, contact: action.payload}
    }
    if(action.type === "RESET_LOCO"){
      // console.log(state.resetLoco, "loco")
      return {...state, resetLoco: !state.resetLoco}
    }
    if(action.type === "SET_ANI"){
      return {...state, aniClick: !state.aniClick}
    }
    if(action.type === "CHANGEPOINTER"){
      return {...state, pointer: {...state.pointer, ...action.payload}}
    }
    return state;
  }