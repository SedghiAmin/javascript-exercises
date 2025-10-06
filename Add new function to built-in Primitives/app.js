if (!String.prototype.repeat){
    
    String.prototype.repeat = function(n){
        Array(n).join(this);
    }
}

alert("am".repeat(3));