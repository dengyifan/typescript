function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "zhan", lastName: "san" };
document.body.innerHTML = greeter(user);
