function printList(list){
    
    /*
    //Recursive solution
    alert(list.value);

     if (list.next != null){
        printList(list.next)
    }; 
    */
    
    // Loop-based solution
    tmp = list

    while (tmp){
        alert(tmp.value);
        tmp = tmp.next;
    }
    
}

let list = {
    value: 1,
    next: {
        value: 2,
        next:{
            value: 3,
            next: {
                value: 4,
                next: null,
            }
        }
    }
}

printList(list);