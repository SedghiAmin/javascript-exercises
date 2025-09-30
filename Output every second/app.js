
let from = 0;
let to = 10;

function tick() {

  document.getElementById("time").innerHTML = from;

  from += 1;

  from <= to ?  timerId = setTimeout(tick, 1000): clearTimeout(timerId)

};

let timerId = setTimeout(tick, 1);

/* Using nested setTimeout:

function tick(){
    from += 1;
    from <= to ? document.getElementById("time").innerHTML = from : clearInterval(timerId)
}

let timerId = setInterval(tick, 1); */