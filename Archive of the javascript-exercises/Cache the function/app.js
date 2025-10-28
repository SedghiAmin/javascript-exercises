let worker = {

    slow(x){
        return x / 2;
    },

    multiple(x , y){
        // there can be a heavy CPU-intensive job here
        return x * this.slow(y);
    },
};

function cachingDecorator(func, hash){
    
    let cache = new Map();

    return function(...arg) {    //you shouldn't use arrow function

        let key = hash(arg);

        if(cache.has(key)){

            alert("read from cash");
            return cache.get(key);
        }

        let result = func.apply(this, arguments);

        cache.set(key, result);

        return result;
    }

}

function hash(...arg){

    return [].join.call(arg);
}

let obj = worker;

obj.multiple = cachingDecorator(obj.multiple , hash);

alert( obj.multiple(6, 8) ); //obj.multiple(6, 8) is cached and the result returned 24

alert( obj.multiple(6, 8) ); //obj.multiple(6, 8) returned from cache