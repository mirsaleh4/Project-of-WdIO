class finishObject{
    get finishIconButton(){
        return $(`//button[@class="btn btn_action btn_medium cart_button"]`);
    }
    get finishMessage(){
        return $(`//h2[@class="complete-header"]`);
    }
    get backHomeButton(){
        return $(`//button[@name="back-to-products"]`);
    }
}

module.exports = new finishObject();