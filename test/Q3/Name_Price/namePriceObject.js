class namePriceObject{
    get productName(){
        return $(`//div[@class="inventory_item_name"]`);
    }
    get productPrice(){
        return $(`//div[@class="summary_subtotal_label"]`);
    }
    get productTax(){
        return $(`//div[@class="summary_tax_label"]`);
    }
    get productTotalPrice(){
        return $(`//div[@class="summary_total_label"]`);
    }
}

module.exports = new namePriceObject();