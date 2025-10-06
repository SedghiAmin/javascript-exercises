if (!Function.prototype.defar){
    Function.prototype.defar = function(ms){
        let f = this;
        return function(...args){
            setTimeout(() => f.apply(this, args), ms);
        }
    }
};

function f(a , b){
    alert( a + b );
};

f.defar(2000)(3, 2);