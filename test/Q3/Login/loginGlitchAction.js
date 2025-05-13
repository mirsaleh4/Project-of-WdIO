const loginGlitchObject = require('../Login/loginGlitchObject.js');
const userName = "performance_glitch_user";
const userPassword = "secret_sauce";

class loginAction2{
    async clickUserNameInputField(){
        await loginGlitchObject.userNameInput.click();
    }
    async setUserNameInputField(){
        await loginGlitchObject.userNameInput.setValue(userName);
    }
    async clickPasswordInputField(){
        await loginGlitchObject.passwordInput.click();
    }
    async setpasswordInputField(){
        await loginGlitchObject.passwordInput.setValue(userPassword);
    }
    async clickLoginButton(){
        await loginGlitchObject.loginButton.click();
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