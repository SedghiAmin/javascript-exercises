function delay(func, delay){
    return function(){
        setTimeout(() => func.apply(this, arguments), delay);
    }
}

function f(x) {
  alert(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 5000);

f1000("show after 1s"); // shows "test" after 1000ms
f1500("show after 5s"); // shows "test" after 1500ms