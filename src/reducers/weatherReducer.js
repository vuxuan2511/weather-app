const weatherReducer = (prevState = {}, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
            return action.payload;
        default:
            return prevState;
    }
};
export default weatherReducer;
