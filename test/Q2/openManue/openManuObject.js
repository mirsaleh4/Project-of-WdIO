class openManuObject{
    get burgerManu(){
        return $(`//div[@class="bm-burger-button"]`);
    }
    get appReset(){
        return $(`//a[@id="reset_sidebar_link"]`);
    }
    get closeManu(){
        return $(`//div[@class="bm-cross-button"]`);
    }
}

module.exports = new openManuObject();