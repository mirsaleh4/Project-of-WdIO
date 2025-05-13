const cartObject = require('../cart/cartObject.js');

class cartAction{
    async clickAddToCartIcon(){
        await cartObject.addToCartIcon.click();
    }

    async addToCart(){
        await this.clickAddToCartIcon();
        await browser.pause(5000);
        await browser.keys('Enter');
    }
}

module.exports = new cartAction();