var dataJSON = require('../data/home.json');

const homeReducer = (state=dataJSON, action) => {
    switch(action.type) {
        case 'NEXT': {
            state.push(state[0]);
            state.shift();
            return [...state];
            break;
        }
        case 'PREV': {
            state.unshift(state[state.length - 1]);
            state.pop();
            return [...state];
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = homeReducer;