const {Given,When,Then} = require('@cucumber/cucumber');

 const {expect} = require('@playwright/test');


Given('Start to type your Given step here a login to Ecommerce application with {string} and {string}',{timeout:100*1000},async function (username, password) {
     
     const products = this.page.locator(".card-body");
     const loginPage = this.poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password);
});

When('Add {string} to the cart',{timeout:100*1000},async function (productName) {
    this.dashboardPage = this.poManager.getDashboardPage();
     await this.dashboardPage.searchProductAddCart(productName);
     await this.dashboardPage.navigateToCart();
});

Then('verify {string} is displayed in the cart',{timeout:100*1000},async function (productName) {
    this.cartPage = this.poManager.getCartPage();
    await this.cartPage.VerifyProductIsDisplayed(productName);
    await this.cartPage.Checkout();
});

When('Enter valid details and place the order',{timeout:100*1000},async function () {
     this.ordersReviewPage = this.poManager.getOrdersReviewPage();
    this.ordersReviewPage.searchCountryAndSelect("ind","India");
    this.orderId = await this.ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify the order is placed successfully and present in order history',{timeout:100*1000},async function () {
   await this.dashboardPage.navigateToOrders();
   this.ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   await this.ordersHistoryPage.searchOrderAndSelect(this.orderId);
   expect(this.orderId.includes(await this.ordersHistoryPage.getOrderId())).toBeTruthy();

});

Given('a login to Ecommerce2 application with {string} and {string}',{timeout:100*1000},async function (userName, Password) {
    const username=this.page.locator('#username');
    const signInBtn=this.page.locator('#signInBtn'); 
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await this.page.title());
    await username.fill(userName);
    await this.page.locator("[name='password']").fill(Password);
    await signInBtn.click();
   
});

Then('verify error message is displayed',async function () {
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
});
