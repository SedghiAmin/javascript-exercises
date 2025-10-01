function printReverseList(list) {

    /* 
    //Using a recursion
    if (list.next) printReverseList(list.next);
    alert(list.value);
     */

    //Using a loop
    let output = [];
    let tmp = list;

    while(tmp){
        output.push(tmp.value);
        tmp = tmp.next;
    };

    for(let i = output.length - 1; i >=0; i--)
        alert( output.pop() );
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printReverseList(list);