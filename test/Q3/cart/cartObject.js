class cartObject{
    get addToCartIcon(){
        return $(`(//button[@class="btn btn_primary btn_small btn_inventory "])[1]`);
    }
}

module.exports = new cartObject();