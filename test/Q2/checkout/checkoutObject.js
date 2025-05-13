class checkoutObject {
    get checkoutIcon() {
        return $(`//button[@id="checkout"]`);
    }
    get firstNameField() {
        return $('(//input[@type="text"])[1]');
    }
    get lastNameField() {
        return $('(//input[@type="text"])[2]');
    }
    get postalCodeField() {
        return $('(//input[@type="text"])[3]');
    }
    get continueButton() {
        return $(`//input[@type="submit"]`);
    }
    
}

module.exports = new checkoutObject();