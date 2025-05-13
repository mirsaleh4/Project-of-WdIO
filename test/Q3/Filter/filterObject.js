class filterObject{
    get filterIcon(){
        return $(`//select[@class="product_sort_container"]`);
    }
    get filterWithZA(){
        return $(`//option[@value="za"]`);
    }
}

module.exports = new filterObject();