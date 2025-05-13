class namePriceObject{
    getProductNameByIndex(index) {
        return $(`(//div[@class="inventory_item_name"])[${index}]`);
    }
    getProductPrice(price){
        return $(`(//div[@class="inventory_item_price"])[${price}]`);
    }
    get taxprice(){
        return $(`//div[@class="summary_tax_label"]`);
    }
    get totalPrice(){
        return $(`//div[@class="summary_total_label" ]`);
    }
}
module.exports = new namePriceObject();