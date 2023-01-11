const tempScaleReducer = (prevState = 'celsius', action) => {
    switch (action.type) {
        case 'TOGGLE_TEMP_SCALE':
            return prevState === 'celsius' ? 'fahrenheit' : 'celsius';
        default:
            return prevState;
    }
};

export default tempScaleReducer;
