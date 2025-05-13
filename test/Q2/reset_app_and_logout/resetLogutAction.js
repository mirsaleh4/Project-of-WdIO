const resetLogOutObject = require('../reset_app_and_logout/resetLogutObject.js');
const openMenuAction = require('../openManue/openManuAction.js');

class resetLogOutAction{

    async clickBurgerMenu(){
        await resetLogOutObject.burgerManu.click();
    }
    async clickLogOut(){
        await resetLogOutObject.logOut.click();
    }

    async finalLogOut(){
        await openMenuAction.burger();
        await this.clickBurgerMenu();
        await browser.pause(2000);
        await this.clickLogOut();
        await browser.pause(5000);
        await browser.keys('Enter');
    }
}
module.exports = new resetLogOutAction();