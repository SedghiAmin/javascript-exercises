let worker = {

    slow(x){
        return x / 2;
    },

    multiple(y , z){
        // there can be a heavy CPU-intensive job here
        return y * this.slow(z);
    },
};

function cachingDecorator(func, hash){
    
    let cache = new Map();

    return function() {    //you shouldn't use arrow function

        let key = hash(arguments);

        if(cache.has(key)){

            alert("read from cash");
            return cache.get(key);
        }

        let result = func.call(this, ...arguments);

        cache.set(key, result);

        return result;
    }

}

function hash(arg){

    return arg[0] + "," + arg[1];
}

let obj = worker;

obj.multiple = cachingDecorator(obj.multiple , hash);

alert( obj.multiple(6, 8) ); //obj.multiple(6, 8) is cached and the result returned 24

alert( obj.multiple(6, 8) ); //obj.multiple(6, 8) returned from cache