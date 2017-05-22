var dataJSON = require('../data/work.json');

const workReducer = (state=dataJSON, action) => {
    switch(action.type) {
        case 'SELECT' : {
            switch(action.target.innerHTML){
                case 'All': state=dataJSON; break;
                case 'Web Design': state=dataJSON.filter(function(obj){return obj.category == 'Web Design'}); break;
                case 'Graphic Design': state=dataJSON.filter(function(obj){return obj.category == 'Graphic Design'}); break;
                case 'Landing Pages': state=dataJSON.filter(function(obj){return obj.category == 'Landing Pages'}); break;
                case 'Wordpress': state=dataJSON.filter(function(obj){return obj.category == 'Wordpress'}); break;
            }
            $( "#work .selected" ).removeClass('selected');
            var tmp = $(action.target).addClass('selected');
            action.target = tmp[0];
            return [...state];
        }
        default: {
            return state;
        }
    }
}

module.exports = workReducer;