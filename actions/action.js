
export const addToCart=(item)=>{
    return {
        type:'ADD_TO_CART',
        payload:item
    }

}
export const removeToCart=(item)=>{
    return {
        type:'REMOVE_TO_CART',
        payload:item
    }
}

export const isLoggedIn=()=>{
    return {
        type:'IS_LOGGED_IN'
    }
}
export const isLoggedOut=()=>{
    return{
        type:'IS_LOGGED_OUT'
    }
}
export const userName=(name)=>{
    return {
        type:'USER_NAME',
        payload:name
    }
}
export const afterLogout=()=>{
    return {
        type:'AFTER_LOG_OUT'
    }
}
export const afterLogin=(item)=>{
    return {
        type:'AFTER_LOG_IN',
        payload:item
    }
}
