const finishObject = require('../finish_Purchase_and_message/finishObject.js');
const { expect } = require('chai');
const expectedMessage = "Thank you for your order!";

class finishAction{
    async clickFinishButton(){
        await finishObject.finishIconButton.click();
    }

    async getFinishMessage(){
        const actualMessage = await finishObject.finishMessage.getText();
        expect(actualMessage).to.equal(expectedMessage, 'Finish message does not match the expected value');
    }

    async clickBackHomeButton(){
        await finishObject.backHomeButton.click();
    }
    async finisButton(){
        await this.clickFinishButton();
        await this.getFinishMessage();
        await this.clickBackHomeButton();
        await browser.pause(2000);
        await browser.keys('Enter');
    }
    
}
module.exports = new finishAction();