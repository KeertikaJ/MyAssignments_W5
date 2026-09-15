//Create Class, Property, Method and Constructor  
class Student {
    studentName: string;
    course: string;

    constructor(studentName: string, course: string) {
        this.studentName = studentName;
        this.course = course
    }

    displayDetails() {
        console.log(this.studentName);
        console.log(this.course);
    }
}
const student1 = new Student("Hari", "Playwright with TypeScript");
const student2 = new Student("Ram", "Selenium with Java");
student1.displayDetails();
student2.displayDetails();

