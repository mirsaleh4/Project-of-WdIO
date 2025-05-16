# 🚀 SauceDemo Automation with WebDriverIO

Automated testing project for [SauceDemo](https://www.saucedemo.com/) using WebDriverIO, designed to validate three end-to-end user scenarios.

---

## 🛠️ Technologies Used

- ✅ WebDriverIO  
- ✅ Mocha (Test Framework)  
- ✅ Chai (Assertion Library)  
- ✅ Allure Reporter (For Reporting)

---

## 📁 Test Scenarios

### 🧪 Q1: Locked Out User Validation...👍
- Login with `locked_out_user`
- Validate error message display

---

### 🛒 Q2: Standard User Full Purchase Flow... 👍
- Login with `standard_user`
- Reset app state
- Add 3 products to cart
- Proceed to checkout
- Validate product names and total
- Complete the order
- Confirm success message
- Reset and log out

---

### ⚙️ Q3: Performance Glitch User + Sorting Test...👍
- Login with `performance_glitch_user`
- Reset app state
- Sort products (Z → A)
- Add first item to cart
- Validate product name and total
- Complete purchase
- Reset and log out

| 🔢 Step | 🧪 Command             | ⚙️ What It Does                                                                 |
|--------:|------------------------|----------------------------------------------------------------------------------|
| 1️⃣     | `npm run wdio`         | Runs the **selected individual test file** (after uncommenting in `wdio.conf.js`). |
| 2️⃣     | `npm run all`     | Executes **all scenarios** (`Q1`, `Q2`, and `Q3`) **in sequence**.               |
| 3️⃣     | `npm run getReport`    | Generates a **detailed Allure test report** after execution.                     |


📚 Resources
-WebdriverIO Documentation

-Mocha Testing Framework

-Chai Assertion Library

