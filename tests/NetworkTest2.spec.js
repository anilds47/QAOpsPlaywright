const {test,expect} = require('playwright/test');


test("Secuity testrequest intercept", async ({page}) => {
//login and reach order page

const email="anildshiva@gmail.com";
await page.goto('https://rahulshettyacademy.com/client');   
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("Dsa@2026");
await page.locator("#login").click();
await page.locator('button:has-text("ORDERS")').click();
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route=>route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a329c0617ee3e78bae78381"}));


await page.locator("button:has-text('View')").first().click();
//  await page.pause();

await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");

});
