function slow(x){
    // there can be a heavy CPU-intensive job here
    return x ** 2;
}

function cachingDecorator(func){
    
    let cache = new Map();

    return (x) => {

        if(cache.has(x)){
            
            return cache.get(x);
        }

        let resualt = func(x);

        cache.set(x, resualt);

        return resualt;
    }

}

slow = cachingDecorator(slow);

alert(slow(5)); //slow(5) is cached and the result returned

alert(slow(5)); //result returned from cache