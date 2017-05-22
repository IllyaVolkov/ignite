const servicesReducer = (state={}, action) => {
    switch(action.type) {
        case 'SELECT' : {
            $( "#services .selected" ).removeClass('selected');
            var tmp = $(action.target).addClass('selected');
            action.target = tmp[0];
            return state;
        }
        default: {
            return state;
        }
    }
}

module.exports = servicesReducer;