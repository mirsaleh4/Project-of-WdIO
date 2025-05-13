class viewCartObject {
    get viewCartIcon() {
        return $(`//a[@class="shopping_cart_link"]`);
    }

    getProductNameByIndex(index) {
        return $(`(//div[@class="inventory_item_name"])[${index}]`);
    }
}

module.exports = new viewCartObject();