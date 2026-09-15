//Access Modifier
class LoginTest {
    public browserName: string = "Chrome";
    private password: string = "admin123";
    protected userName: string = "tester";

    public openApplication() {
        console.log("---------- Open Application ----------")
    }
    public login() {
        console.log("---------- Login ----------")
        console.log(this.password);
        console.log(this.userName);
    }
}
//Accessing Public properties
const loginTestObj = new LoginTest();
console.log("----------Outside the class------------")
console.log(loginTestObj.browserName);
loginTestObj.openApplication();
loginTestObj.login();

//Accessing Private and Protected prop
// loginTestObj.password;
// loginTestObj.userName;

