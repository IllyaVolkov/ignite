const contactReducer = (state={errorName: '', errorEmail: '', errorMessage: ''}, action) => {
    switch(action.type) {
        case 'CHECKNAME': {
            var regexp = /^[a-zA-Z]+$/;
            if (action.value.search(regexp) == -1) {
                state.errorName = 'WARNING: Only latin symbols are allowed!';
            } else state.errorName = '';
            return {...state};
            break;
        }
        case 'CHECKEMAIL': {
            var regexp = /^[a-zA-Z_0-9.]+@[a-z]+.[a-z]+$/;
            if (action.value.search(regexp) == -1) {
                state.errorEmail = 'WARNING: Invalid email!';
            } else state.errorEmail = '';
            return {...state};
            break;
        }
        case 'CHECKMESSAGE': {
            var regexp = /.{20,}/;
            if (action.value.search(regexp) == -1) {
                state.errorMessage = 'WARNING: At least 20 symbols required!';
            } else state.errorMessage = '';
            return {...state};
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = contactReducer;