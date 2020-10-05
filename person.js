// Module Wrapper Function
(function(exports, require, module, __filename, __dirname){
    
})

//console.log(__dirname, __filename)

class Person{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} ${this.surname}...`)
    }
}

module.exports = Person; // Export module