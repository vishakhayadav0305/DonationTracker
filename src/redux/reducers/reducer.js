const INIT_STATE ={
    carts:[]
}

export const cartreducer =(state=INIT_STATE, action)=>{
    switch(action.type){
        case "NEW_PAGE":
            return{
                // ...state,
                carts:[,action.payload]
            }

        default:
            return state
    }
}