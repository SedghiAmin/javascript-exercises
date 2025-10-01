let worker = {

    slow(x){
        return x / 2;
    },

    multiple(y){
        // there can be a heavy CPU-intensive job here
        return y * this.slow(y);
    },
};

function cachingDecorator(func){
    
    let cache = new Map();

    return function(x) {    //you shouldnt use arrow function

        if(cache.has(x)){
            
            return cache.get(x);
        }

        let result = func.call(this, x);

        cache.set(x, result);

        return result;
    }

}

let obj = worker;

obj.multiple = cachingDecorator(obj.multiple);

alert( obj.multiple(6) ); //obj.multiple(6) is cached and the result returned 18

alert( obj.multiple(6) ); //obj.multiple(6) returned from cache