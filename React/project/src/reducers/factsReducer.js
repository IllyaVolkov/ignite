var dataJSON = require('../data/facts.json');

const factsReducer = (state=dataJSON, action) => {
    switch(action.type) {
        case 'UPDATE': {
            state.works.state = action.value.works;
            state.customers.state = action.value.customers;
            state.purchase.state = action.value.purchase;
            state.office.state = action.value.office;
            return {...state};
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = factsReducer;