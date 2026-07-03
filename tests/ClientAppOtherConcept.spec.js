const {test,expect }=require('@playwright/test');


test('Browser context validating error login', async ({page})=>{
//Async is used to wait for the page to load before performing any actions
//Chrome browser is used to launch the browser

const products=page.locator(".card-body");
const productName="ZARA COAT 3";
const email="anildshiva@gmail.com";
await page.goto('https://rahulshettyacademy.com/client');   
await page.getByPlaceholder("email@example.com").fill(email);
await page.getByPlaceholder("enter your passsword").fill("Dsa@2026");
await page.getByRole("button", { name: "Login" }).click();

//await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();

await page.locator(".card-body").filter({ hasText: productName }).locator("text= Add To Cart").click();

await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();

await page.locator("div li").first().waitFor();
await page.locator("h3:has-text('zara coat 3')").isVisible();

await page.getByRole("button", { name: "Checkout" }).click();

await page.getByPlaceholder("Select Country").pressSequentially("ind", { delay: 150 });

await page.getByRole("button", { name: "India" }).nth(1).click();


const cvvInput = await page
  .locator("div.field.small")
  .filter({ hasText: "CVV Code" })
  .locator("input");
await cvvInput.fill("123");

const nameOfCard = await page
  .locator("div.field")
  .filter({ hasText: "Name on Card " })
  .locator("input");

  await nameOfCard.fill("Anil D S");

  await page.getByText("Place Order").click();

  await page.getByText("Thankyou for the order.").isVisible();


});




