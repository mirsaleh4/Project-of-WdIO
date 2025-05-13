const namePriceObject = require('../poroduct_Name_and_Price/namePriceObject.js');
const { expect } = require('chai');

const expectedFirstProductName = "Sauce Labs Backpack";
const expectedSecondProductName = "Sauce Labs Bike Light";
const expectedThirdProductName = "Sauce Labs Bolt T-Shirt";

class namePriceAction {
    async getProductName(index) {
        const product = await namePriceObject.getProductNameByIndex(index);
        return await product.getText();
    }

    async getProductPrice(index) {
        const productPrice = await namePriceObject.getProductPrice(index);
        const priceText = await productPrice.getText();
        return parseFloat(priceText.split('$')[1]);
    }

    async getTaxValue() {
        const taxText = await namePriceObject.taxprice.getText();
        const taxValue = taxText.split('$')[1];
        return parseFloat(taxValue);
    }

    async getTotalPrice() {
        const totalPrice = await namePriceObject.totalPrice.getText();
        const actualTotalPrice = totalPrice.split('$')[1];
        return parseFloat(actualTotalPrice);
    }

    async verifyProductNames() {
        const firstProductName = await this.getProductName(1);
        const secondProductName = await this.getProductName(2);
        const thirdProductName = await this.getProductName(3);

        expect(firstProductName).to.equal(expectedFirstProductName, 'First product name does not match the expected value');
        expect(secondProductName).to.equal(expectedSecondProductName, 'Second product name does not match the expected value');
        expect(thirdProductName).to.equal(expectedThirdProductName, 'Third product name does not match the expected value');
    }

    async verifyProductPrice() {
        const firstProductPrice = await this.getProductPrice(1);
        const secondProductPrice = await this.getProductPrice(2);
        const thirdProductPrice = await this.getProductPrice(3);
        const taxValue = parseFloat(await this.getTaxValue());
        const expectedPrice = taxValue + firstProductPrice + secondProductPrice + thirdProductPrice;

        expect(expectedPrice).to.equal(await this.getTotalPrice(), 'Total price does not match the expected value');
    }

    async verifyNamePrice() {
        await this.verifyProductNames();
        await this.verifyProductPrice();
        await browser.keys("Enter");
    }
}

module.exports = new namePriceAction();