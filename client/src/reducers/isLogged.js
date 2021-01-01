const isLoggedReducer = (state = false, action) => {
    switch(action.type){
        case 'UPDATE_ISLOGGED':
            return action.payload;
        default:
            return state
    }
}

export default isLoggedReducer