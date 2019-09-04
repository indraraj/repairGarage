const initialState = {
    askQuestion: false,
    ansQuestion: false
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
        default:
            return state;
    };
}

export default reducer;