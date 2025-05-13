class loginObject{
    get userNameInput(){
        return $(`//input[@placeholder="Username"]`);
    }
    get passwordInput(){
        return $(`//input[@placeholder="Password"]`);
    }
    get loginButton(){
        return $(`//input[@type="submit"]`);
    }
    get errorMessage(){
        return $(`//h3[@data-test="error"]`);
    }
}
module.exports = new loginObject();