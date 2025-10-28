function makeCounter(){
    
    counter.count = 0;

    function counter() {
        return counter.count += 1;
    }

    counter.set = (value) => counter.count = value;

    counter.decrease = () => alert(counter.count -=1);

    return counter;
}

let counter = makeCounter();

counter.set(50);

alert(counter());

counter.decrease();
