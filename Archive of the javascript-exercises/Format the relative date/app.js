function formatDate(date) {

    let d = [
        '0' + date.getFullYear(),
        '0' + date.getMonth(),
        '0' + date.getDate(),
        '0' + date.getHours(),
        '0' + date.getMinutes(),
    ].map(item => item.slice(-2))

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');

}

alert( formatDate(new Date()) );