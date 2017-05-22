export const select = (e) => {
    return {
        type: 'SELECT',
        target: e.currentTarget
    }
}

export const render = () => {
    return {
        type: 'RENDER'
    }
}