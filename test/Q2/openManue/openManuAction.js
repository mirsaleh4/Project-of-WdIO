const openMauObject = require('../openManue/openManuObject.js');

class openManuAction{
    async clickBurgerManu(){
        await openMauObject.burgerManu.click();
    }
    async clickAppReset(){
        await openMauObject.appReset.click();
    }
    async clickCloseManu(){
        await openMauObject.closeManu.click();
    }


    async burger(){
        await this.clickBurgerManu();
        await browser.pause(2000);
        await this.clickAppReset();
        await browser.pause(2000);
        await this.clickCloseManu();
        await browser.keys('Enter');
    }
}

module.exports = new openManuAction();