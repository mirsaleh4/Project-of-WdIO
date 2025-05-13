const viewCartObject = require('../viewCart/viewCartObject.js');
const { expect } = require('chai');
const expectedFirstProductName = "Sauce Labs Backpack";
const expectedSecondProductName = "Sauce Labs Bike Light";      
const expectedThirdProductName = "Sauce Labs Bolt T-Shirt";

class viewCartAction {
    async getProductName(index) {
        const product = await viewCartObject.getProductNameByIndex(index);
        return await product.getText();
    }

    async viewCartItem() {
        await viewCartObject.viewCartIcon.click();
        const firstProductName = await this.getProductName(1);
        const secondProductName = await this.getProductName(2);
        const thirdProductName = await this.getProductName(3);
        expect(expectedFirstProductName).to.equal( firstProductName, 'First product name does not match the expected value');
        expect(expectedSecondProductName).to.equal( secondProductName, 'Second product name does not match the expected value');
        expect(expectedThirdProductName).to.equal( thirdProductName, 'Third product name does not match the expected value');

    }
}

module.exports = new viewCartAction();