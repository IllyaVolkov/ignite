export const add = () => {
    var title = document.getElementById('feedback').getElementsByTagName('input')[0].value;
    var text = document.getElementById('feedback').getElementsByTagName('textarea')[0].value;
    if (text && title)
    return {
        type: 'ADD',
        title: title,
        text: text
    }
    else return {
        type: 'SKIP'
    }
}

export const remove = (id) => {
    return {
        type: 'REMOVE',
        id: id
    }
}