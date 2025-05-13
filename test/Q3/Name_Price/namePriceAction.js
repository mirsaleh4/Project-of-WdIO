const namePriceObject = require('../Name_Price/namePriceObject.js');
const { expect } = require('chai');
const expectedProductName= "Test.allTheThings() T-Shirt (Red)";

class namePriceAction {
    async getProductName() {
        const actualProductName = await namePriceObject.productName.getText();
        return actualProductName;
    }

    async getNumericValue(text) {
        const match = text.match(/[\d,.]+/);
        return parseFloat(match[0].replace(/,/g, ''));
    }

    async getProductPrice() {
        const pprice = await namePriceObject.productPrice.getText();
        return pprice;
    }

    async getProductTax() {
        const ptax = await namePriceObject.productTax.getText();
        return ptax;
    }

    async getProductTotalPrice() {
        const ptotal = await namePriceObject.productTotalPrice.getText();
        return ptotal;
    }

    async validatePriceCalculation(pprice, ptax, ptotal) {
        const price = await this.getNumericValue(pprice);
        const tax = await this.getNumericValue(ptax);
        const actualtotal = await this.getNumericValue(ptotal);
        const expectedtotal = price + tax;
        expect(expectedtotal).to.equal(actualtotal, "Price is not valid");
    }

    async validateProductName(actualProductName) {
        expect(actualProductName).to.equal(expectedProductName, "Product name is not valid");
    }

    async namePrice() {
        const pprice = await this.getProductPrice();
        const ptax = await this.getProductTax();
        const ptotal = await this.getProductTotalPrice();
        const actualProductName = await this.getProductName();
        await this.validatePriceCalculation(pprice, ptax, ptotal);
        await this.validateProductName(actualProductName);
        await browser.keys('Enter');
        await browser.pause(3000);
    }
}

module.exports = new namePriceAction();
