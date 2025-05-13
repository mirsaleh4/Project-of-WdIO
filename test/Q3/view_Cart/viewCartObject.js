class viewCartObject{
    get cartIcon(){
        return $('//a[@class="shopping_cart_link"]');
    }
}

module.exports = new viewCartObject();