Promise.all([
    new Promise(resolved => {setTimeout(() => {console.log(1); resolved(1);}, 3000)}),
    new Promise(resolved => {setTimeout(() => {console.log(2); resolved(2);}, 1500)}),
    new Promise(resolved => {setTimeout(() => {console.log(3); resolved(3);}, 1000)}),
])
.then(alert);  // 1,2,3 when promises are ready: each promise contributes an array member