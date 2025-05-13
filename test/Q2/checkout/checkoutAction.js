const checkoutObject = require('./checkoutObject.js');
const firstName = "Saleh";
const lastName = "Ahmad";
const postalCode = "6789";


class checkoutAction {
    async clickCheckoutIcon() {
        await checkoutObject.checkoutIcon.click();
    }

    async enterFirstNameInputField() {
        await checkoutObject.firstNameField.setValue(firstName);
    }

    async enterLastNameInputField() {
        await checkoutObject.lastNameField.setValue(lastName);
    }

    async enterPostalCodeInputField() {
        await checkoutObject.postalCodeField.setValue(postalCode);
    }

    async clickContinueButton() {
        await checkoutObject.continueButton.click();
    }

    
    async checkOut() {
        await this.clickCheckoutIcon();
        await this.enterFirstNameInputField();
        await browser.pause(3000);
        await this.enterLastNameInputField();
        await browser.pause(3000);
        await this.enterPostalCodeInputField();
        await browser.pause(3000);
        await this.clickContinueButton();
        await browser.keys("Enter");
    }
}

module.exports = new checkoutAction();