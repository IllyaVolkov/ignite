var dataJSON = require('../data/feedback.json');
dataJSON.sort(function(a, b) {return a.id - b.id});

const feedbackReducer = (state=dataJSON, action) => {
    switch(action.type) {
        case 'ADD' : {
            var id = state[state.length-1].id;
            state.push({id: id + 1, title: action.title, text: action.text});
            return [...state];
        }
        case 'REMOVE' : {
            state = state.filter(function(item){return item.id != action.id});
            return [...state];
        }
        default: {
            return state;
        }
    }
}

module.exports = feedbackReducer;