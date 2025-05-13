const loginAction2 = require('../test/Q2/login/loginAction2.js');
const openManuAction = require('../test/Q2/openManue/openManuAction.js');
const cartAction = require('../test/Q2/cart/addToCartAction.js');
const viewCartAction = require('../test/Q2/viewCart/viewCartAction.js');
const checkoutAction = require('../test/Q2/checkout/checkoutAction.js');
const finishAction = require('../test/Q2/finish_Purchase_and_message/finishAction.js');
const resetLogOutAction = require('../test/Q2/reset_app_and_logout/resetLogutAction.js');
const namePriceAction = require('../test/Q2/poroduct_Name_and_Price/namePriceAction.js');

describe("Login with standard User",()=>{
    it("Verify the login in the application",async()=>{
        await loginAction2.login();
    }),
    it("Verify the Burger Menu", async()=>{
        await openManuAction.burger();
    }),
    it("Verify Three proucts are added to the cart",async()=>{
        await cartAction.addToCart();
    }),
    it("Verify the Prodcuts name and Price ", async()=>{
        await viewCartAction.viewCartItem();
    }),
    it("Verify the checkout and purchase journey ", async()=>{
        await checkoutAction.checkOut();
    }),
    it("Verify the Name and Total Price", async()=>{
        await namePriceAction.verifyNamePrice();
    }),
    it("Verify the finish purchase and message", async()=>{
        await finishAction.finisButton();
    }),
    it("Verify the Reset app state and Logout", async()=>{
        await resetLogOutAction.finalLogOut();
    })
});