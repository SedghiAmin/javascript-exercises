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

promise.then(
    (src) => alert(`${src} is loaded...`),
    (err) => alert(`we can't load ${err}`),
);


src = "";
promise = loadScript(src);

promise.then(
    (src) => alert(`${src} is loaded...`),
    (err) => alert(`we can't load ${err}`),
);