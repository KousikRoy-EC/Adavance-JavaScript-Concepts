// call
// using call method we can borrow a function and use it with our context

let nameObj={
    first_name:"Kousik",
    last_name:"Roy",
}

let pritnfullname=function(nickName,state){
    console.log(this.first_name+" "+this.last_name + " " +"nickname is " + nickName + " " +"lives in " + state); 
}

pritnfullname.call(nameObj,"Aman","Gujarat");   

// apply
// the only difference between call and apply method is the way we pass the arguments to the function that we are borrowing in call we pass it directly but in apply we pass it as an array

pritnfullname.apply(nameObj,["Aman","Gujarat"]);

// bind
// does not call function directly it binds the object with the method and return us the function which we can call later 

let printMyName=pritnfullname.bind(nameObj);
printMyName("lala","kolkata");












