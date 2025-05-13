const filterObject = require('../Filter/filterObject.js');

class filterActon{
    async clickFilterIcon(){
        await filterObject.filterIcon.click();
    }
    async clickFilterWithZA(){
        await filterObject.filterWithZA.click();
    }


    async filtering(){
        await this.clickFilterIcon();
        await this.clickFilterWithZA();
        await browser.pause(5000);
        await browser.keys('Enter');
    }
}

module.exports = new filterActon();