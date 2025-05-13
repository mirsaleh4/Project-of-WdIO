const resetAppAction1 = require('../../Q2/openManue/openManuAction.js');

class resetAppAction{
    async resetApp(){
        await resetAppAction1.burger();
        await browser.keys('Enter');
    }
}

module.exports = new resetAppAction();