const loginObject2 = require('../login/loginObject2.js');
const userName = "standard_user";
const userPassword = "secret_sauce";

class loginAction2{
    async clickUserNameInputField(){
        await loginObject2.userNameInput.click();
    }
    async setUserNameInputField(){
        await loginObject2.userNameInput.setValue(userName);
    }
    async clickPasswordInputField(){
        await loginObject2.passwordInput.click();
    }
    async setpasswordInputField(){
        await loginObject2.passwordInput.setValue(userPassword);
    }
    async clickLoginButton(){
        await loginObject2.loginButton.click();
    }
    async login(){
        await this.clickUserNameInputField();
        await this.setUserNameInputField();
        await this.clickPasswordInputField();
        await this.setpasswordInputField();
        await this.clickLoginButton();
        await browser.keys('Enter');
        await browser.pause(2000);
    }
}

module.exports  = new loginAction2();