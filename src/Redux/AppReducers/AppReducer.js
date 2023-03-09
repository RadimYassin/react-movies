let init={
      WatchList:[]
}


function AppReducer (state=init,{type,payload}){
    switch (type) {
          case "ADD_M":
             return {...state,WatchList:[...state.WatchList,payload]}

             case "Del_M":
                    return {...state,WatchList:[...state.WatchList.filter((i)=>i.id!==payload)]}
          
         
        default: return state ;
           
    }
}

export default AppReducer