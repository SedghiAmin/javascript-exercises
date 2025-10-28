function spy(func) {

  function wrap(...args) {
    // using ...args instead of arguments to store "real" array in wrapper.calls
    wrap.calls.push(args);
    return func.apply(this, args);
  }

  wrap.calls = [];

  return wrap;
}

function sum(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}

let work = spy(sum);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}