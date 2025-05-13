const loginAction = require("../Que 1/loginAction");

describe("login with locked_out_user and verify error message.", () => {
    it("verify error message", async () => {
        await loginAction.login();
    });
});