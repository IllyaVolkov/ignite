var dataJSON = require('../data/data.json');
var size = 8;

const newsReducer = (state=dataJSON.slice(0,size), action) => {
    switch(action.type) {
        case 'LOAD' : {
            size += 8;
            return dataJSON.slice(0,size);
        }
        default: {
            return state;
        }
    }
}

module.exports = newsReducer;