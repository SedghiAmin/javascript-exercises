if (!Function.prototype.defar){
    Function.prototype.defar = function(ml){
        setTimeout(this, ml);
    }
};

function f(){
    alert("tets");
}

f.defar(2000);