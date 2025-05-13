class resetLogOutObject{
    get burgerManu(){
        return $(`//div[@class="bm-burger-button"]`);
    }

    get logOut(){
        return $(`//a[@id="logout_sidebar_link"]`);
    }
}

module.exports = new resetLogOutObject();