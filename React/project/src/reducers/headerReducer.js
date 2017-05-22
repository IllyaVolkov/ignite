var dataJSON = require('../data/header.json');

const headerReducer = (state=dataJSON, action) => {
    switch(action.type) {
        case 'SELECT': {
            for (var item in state) {
                if (state[item].name != action.selected)
                    state[item].selected = false;
                else state[item].selected = true;
            }
            return [...state];
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = headerReducer;