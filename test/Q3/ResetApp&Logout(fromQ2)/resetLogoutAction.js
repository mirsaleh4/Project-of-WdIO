const resetLogoutAction = require('../../Q2/reset_app_and_logout/resetLogutAction.js');

class resetLogAction{
    async resetAndLogout(){
        await resetLogoutAction.finalLogOut();
        await browser.keys('Enter');
        await browser.pause(3000);
    }
}

module.exports = new resetLogAction();