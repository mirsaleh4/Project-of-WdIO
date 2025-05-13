const loginAction = require('../test/Q1/loginAction.js');

describe("login with locked_out_user and verify the error message.",()=>{
    it("Verify the error message",async()=>{
        await loginAction.login();
    })
})