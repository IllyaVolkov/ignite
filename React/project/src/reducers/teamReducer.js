var dataJSON = require('../data/team.json');

const teamReducer = (state=dataJSON, action) => {
    switch(action.type) {
        case 'HOVER': {
            return [...state];
            break;
        }
        case 'UNHOVER': {
            return [...state];
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = teamReducer;