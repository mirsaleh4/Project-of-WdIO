const checkOutAction1 = require('../../Q2/checkout/checkoutAction');

class checkOutAction{

    async checkOut(){
        await checkOutAction1.checkOut();
        await browser.keys("Enter");
        await browser.pause(3000);
    }
}

module.exports = new checkOutAction();