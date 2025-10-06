if (!String.prototype.repeat){
    
    String.prototype.repeat = function(n){
        return Array(n).join(this);
    }
}

alert("am".repeat(3));