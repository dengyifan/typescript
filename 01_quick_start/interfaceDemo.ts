interface Person {
   firstName:string;
   lastName:string;
} 

function greeter(person:Person){
   return "Hello, " + person.firstName + " " + person.lastName;
}

var user = {firstName:"zhan",lastName:"san"};

document.body.innerHTML = greeter(user);




