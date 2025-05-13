const addToCartObject = require('../cart/addToCartObject.js');

class addToCartAction{
    async clickFirstProductToAddToCart(){
        await addToCartObject.firstProductAddToCart.click();
    }
    async clickSecondProductToAddToCart(){
        await addToCartObject.secondProductAddToCart.click();
    }
    async clickThirdProductToAddToCart(){
        await addToCartObject.thirdProductAddToCart.click();

    }

    async addToCart(){
        await this.clickFirstProductToAddToCart();
        await this.clickSecondProductToAddToCart();
        await this.clickThirdProductToAddToCart();
        await browser.keys('Enter');
    }
}

module.exports = new addToCartAction();