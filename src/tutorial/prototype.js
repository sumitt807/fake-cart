var student = function () {
    this.name = "Sumit";
    this.age = 27;
    this.emai = "test@gmail.com";
}

student.prototype = {
    address: "Rajasthan",
    getName: function () {
        return this.name;
    }
}

var stud = new student();

console.log(stud.getName());