const finishObject = require('../../Q2/finish_Purchase_and_message/finishAction.js');

class finishAcion{

    async clickFinishButton(){
        await finishObject.finisButton();
        await browser.keys('Enter');
        await browser.pause(3000);
    }
}

module.exports = new finishAcion();