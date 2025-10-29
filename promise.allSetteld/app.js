let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
.then(results => {
    results.forEach((result, index) => {
        if(result.status == "fulfilled"){
            alert(`${urls[index]}: ${result.value.status}`);
        }else if(result.status == "rejected"){
            alert(`${urls[index]} : ${result.reason}`);
        }
    })
});
