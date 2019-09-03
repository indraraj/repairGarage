const initialState = {
    askQuestion: false
};

const reducer = (state = initialState, action) =>{
    if(action.type === 'ASKQ'){
        return {
            askQuestion: !state.askQuestion
        }
    }
    return state;

}

export default reducer;