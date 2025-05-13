class loginGlitchObject{
    get userNameInput(){
        return $(`//input[@placeholder="Username"]`);
    }
    get passwordInput(){
        return $(`//input[@placeholder="Password"]`);
    }
    get loginButton(){
        return $(`//input[@type="submit"]`);
    }
    
}
module.exports = new loginGlitchObject();