const initialState = {
    askQuestion: false,
    ansQuestion: false,
    addTopic: false
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
        default:
            return state;
    };
}

export default reducer;