class user{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword(){
        return `${this.username}123`
    }
    changeusername(newusername){
        this.username= `${this.username.toUpperCase()}`;
    }
}

const chai = new user("chai","chai@gmail.com","123");

console.log(chai.encryptedPassword());
console.log(chai.changeusername());


// behind the scene

function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptedPassword = function() {
    return `${this.username}123`;
};

user.prototype.changeusername = function(newUsername) {
    this.username = newUsername;
    return this.username;
};

const tea = new user("tea", "tea@gmail.com", "abs");

console.log(tea.encryptedPassword());
console.log(tea.changeusername("coffee"));