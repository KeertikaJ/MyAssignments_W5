"use strict";
//Access Modifier
class LoginTest {
    browserName = "Chrome";
    password = "admin123";
    userName = "tester";
    openApplication() {
        console.log("---------- Open Application ----------");
    }
    login() {
        console.log("---------- Login ----------");
        console.log(this.password);
        console.log(this.userName);
    }
}
//Accessing Public properties
const loginTestObj = new LoginTest();
console.log("----------Outside the class------------");
console.log(loginTestObj.browserName);
loginTestObj.openApplication();
loginTestObj.login();
//Accessing Private and Protected prop
// loginTestObj.password;
// loginTestObj.userName;
