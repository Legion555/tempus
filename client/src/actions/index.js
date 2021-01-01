//View
export const updateView = (data) => {
    return {
        type: 'UPDATE_VIEW',
        payload: data
    }
};


//UserData
export const updateUserData = (data) => {
    return {
        type: 'UPDATE_USERDATA',
        payload: data
    }
}

//isLogged
export const updateIsLogged = (data) => {
    return {
        type: 'UPDATE_ISLOGGED',
        payload: data
    }
}