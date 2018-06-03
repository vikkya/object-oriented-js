//object literals example
var user = {
    name: 'Patrick Ross',
    email: 'patrick@email.com',
    login(){
        console.log(this.email, "is logged in"); // this is refered to user object as it is in user object scope
    },
    logout(){
        console.log(this.email, "is logged out");
    }
}
//this
// if we use this outside user then it refers to global object (i.e. window)

console.log(user.name)     //Patrick Ross
console.log(user.login()) // partrick@email.com is logged in