//
let student = {
    name: "Bob",
    grade: 90,
    getGrade: function (grade) {
        if (this.grade >= 80) {
            return "A";
        }
        else {
            return "B";
        }
    }
};

let result = student.getGrade();
console.log(`Student result is: ${result}`);
console.log(student.name);
