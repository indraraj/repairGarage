const initialState = {
    askQuestion: false,
    ansQuestion: false,
    addTopic: false,
    userAuthenticated: false
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'ASKQ':
            return {
                ...state,
                askQuestion: !state.askQuestion
            }
        case 'ANSQ':
            return {
                ...state,
                ansQuestion: !state.ansQuestion
            }
        case 'ADDT':
            return {
                ...state,
                addTopic: !state.addTopic
            }
        case 'AUTHENTICATE':
            return {
                ...state,
                userAuthenticated: !state.userAuthenticated
            }
        default:
            return state;
    };
}

export default reducer;