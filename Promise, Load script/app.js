function loadScript(src){

    return new Promise(function (resolve, reject){
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(src);
        script.onerror = () => reject(new Error(src));

        document.head.append(script);
    });
};

let src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js";
let promise = loadScript(src);

promise.then(function (msg){ 
    alert(`${msg} is loaded...`);
    return loadScript("");
})
.then(function (msg){ 
    alert(`${msg} is loaded...`);
    return loadScript(src);
})
.then(function (msg){ 
    alert(`${msg} is loaded...`);
})
.catch(
    (err) => alert(`we can't load ${err}`),
);