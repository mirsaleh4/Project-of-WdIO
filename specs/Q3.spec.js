const loginGlitchAction = require('../test/Q3/Login/loginGlitchAction.js');
const resetAppAction = require('../test/Q3/reset_App(fromQ2)/resetAppAction.js');
const filterAction = require('../test/Q3/Filter/filterAction.js');
const cartAction = require('../test/Q3/cart/cartAction.js');
const viewCartAction = require('../test/Q3/view_Cart/viewCartAction.js');
const checkOutAction = require('../test/Q3/CheckOut(fromQ2)/checkoutAction.js');
const namePriceAction =require('../test/Q3/Name_Price/namePriceAction.js');
const finishAction = require('../test/Q3/SuccessMessage(from Q2)/finishMessageAction.js');
const logoutAction = require('../test/Q3/ResetApp&Logout(fromQ2)/resetLogoutAction.js');

describe("Login with Performance_Glitch_User ",()=>{
    it("Verify the error message",async()=>{
        await loginGlitchAction.login();
    }),
    it("Verify the App Reset", async()=>{
        await resetAppAction.resetApp();
    }),
    it("Verify the Filter (Z-A)", async()=>{
        await filterAction.filtering();
    }),
    it("Verify Add To Cart", async()=>{
        await cartAction.addToCart();
    }),
    it("Verify the View Cart",async()=>{
        await viewCartAction.viewCart();
    }),
    it("Verify CheckOut ",async()=>{
        await checkOutAction.checkOut();
    }),
    it("Verify The product Name and total price(with tax)", async()=>{
        await namePriceAction.namePrice();
    }),
    it("Verify the finish message", async()=>{
        await finishAction.clickFinishButton();
    }),
    it("Verify the LogOut with Reset App", async()=>{
        await logoutAction.resetAndLogout();
    })
});