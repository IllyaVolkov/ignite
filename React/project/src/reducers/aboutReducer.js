var dataJSON = require('../data/about.json');

const aboutReducer = (state=dataJSON, action) => {
    switch(action.type) {
        case 'SELECT' : {
            $( "#about .selected" ).removeClass('selected');
            var tmp = $(action.target).addClass('selected');
            action.target = tmp[0];
            $( "#about .info" ).removeClass('history biography skills');
            $( "#about .info" ).addClass(action.target.innerHTML.split(' ')[1]);
            return {...state};
        }
        case 'RENDER' : {
            return {...state};
        }
        default: {
            return state;
        }
    }
}

module.exports = aboutReducer;