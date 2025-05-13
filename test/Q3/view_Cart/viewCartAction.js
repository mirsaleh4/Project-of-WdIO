const viewCartObject = require('../view_Cart/viewCartObject');

class viewCartAction{
    async clicCartIcon(){
        await viewCartObject.cartIcon.click();
    }

    async viewCart(){
        await this.clicCartIcon();
        await browser.pause(3000);
        await browser.keys('Enter');
    }
}

module.exports = new viewCartAction();