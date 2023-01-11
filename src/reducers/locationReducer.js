const locationReducer = (prevState = {}, action) => {
    switch (action.type) {
        case 'FETCH_LOCATION':
            return action.payload;
        case 'FETCH_LOCATION_ERROR':
            return prevState;
        default:
            return prevState;
    }
};
export default locationReducer;
