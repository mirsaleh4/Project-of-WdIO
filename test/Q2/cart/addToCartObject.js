class addToCartObject{

    get firstProductAddToCart(){
        return $(`//button[@name = "add-to-cart-sauce-labs-backpack"]`);
    }
    get secondProductAddToCart(){
        return $(`//button[@name = "add-to-cart-sauce-labs-bike-light"]`);
    }
    get thirdProductAddToCart(){
        return $(`//button[@name="add-to-cart-sauce-labs-bolt-t-shirt"]`);
    }
}

module.exports = new addToCartObject();