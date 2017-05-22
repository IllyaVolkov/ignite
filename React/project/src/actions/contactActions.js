export const checkName = (e) => {
    return {
        type: 'CHECKNAME',
        value: e.target.value
    }
}

export const checkEmail = (e) => {
    return {
        type: 'CHECKEMAIL',
        value: e.target.value
    }
}

export const checkMessage = (e) => {
    return {
        type: 'CHECKMESSAGE',
        value: e.target.value
    }
}