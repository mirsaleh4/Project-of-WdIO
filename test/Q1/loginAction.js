const { expect } = require('chai');
const loginObject = require('./loginObject.js');
const userName = "locked_out_user";
const userPassword = "secret_sauce";
const expectedMessage = "Epic sadface: Sorry, this user has been locked out.";

class loginAction {
    async clickUserNameInputField() {
        await loginObject.userNameInput.click();
    }
    async setUserNameInputField() {
        await loginObject.userNameInput.setValue(userName);
    }
    async clickPasswordInputField() {
        await loginObject.passwordInput.click();
    }
    async setpasswordInputField() {
        await loginObject.passwordInput.setValue(userPassword);
    }
    async clickLoginButton() {
        await loginObject.loginButton.click();
    }
    async getErrorMessage() {
        const actualMessage = await loginObject.errorMessage.getText();
        expect(actualMessage).to.equal(expectedMessage);
    }
    async login() {
        await this.clickUserNameInputField();
        await this.setUserNameInputField();
        await this.clickPasswordInputField();
        await this.setpasswordInputField();
        await this.clickLoginButton();
        await this.getErrorMessage
        await browser.keys('Enter');
        await browser.pause(2000);
    }
}

module.exports = new loginAction();