const {test,expect }=require('@playwright/test');


test('Browser context validating error login', async ({page})=>{
//Async is used to wait for the page to load before performing any actions
//Chrome browser is used to launch the browser

const products=page.locator(".card-body");
const productName="ZARA COAT 3";
const email="anildshiva@gmail.com";
await page.goto('https://rahulshettyacademy.com/client');   
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("Dsa@2026");
await page.locator("#login").click();
//await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
const title=await page.locator(".card-body b").allTextContents();
//console.log(title);
const count =await products.count();
for(let i=0; i<count; ++i){
  
    if( await products.nth(i).locator("b").textContent()===productName){

        await products.nth(i).locator("text= Add To Cart").click();
        break;


}
}

await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool=await page.locator("h3:has-text('zara coat 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();

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

  await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });

  const dropdownOptions = page.locator(".ta-results");
  await dropdownOptions.waitFor();
  const optionsCount = await dropdownOptions.locator("button").count();
   //await page.pause();
  for(let i=0; i<optionsCount; ++i){

    const text=await dropdownOptions.locator("button").nth(i).textContent();
    if(text.trim()==="India"){
    await dropdownOptions.locator("button").nth(i).click();
    break;
  }
}

//await page.pause();
//await expect(page.locator(".user__name [type='text']").first()).toHaveValue(email);

const element = page.locator(".user__name [type='text']").first();
console.log(await element.textContent());

await page.locator(".action__submit").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");  
const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();

const cleanedOrderIdText = await orderId.replace(/\|/g, '').trim();
console.log("Clean oder id"+cleanedOrderIdText);

await page.locator('button:has-text("ORDERS")').click();
await page.locator("tbody").waitFor();
const orderIds=await page.locator("tbody tr");

//await page.pause();

const orderIdsCount =  await orderIds.count();

console.log(orderIdsCount);


for(let i=0; i<orderIdsCount; ++i){

  const text=await orderIds.locator("th").nth(i).textContent();
  console.log("Testing"+text);
    if(text===cleanedOrderIdText){
    await page.locator('tbody tr button.btn.btn-primary').nth(i).click()
    break;

}
}

const orderIdDetails=await page.locator(".col-text").textContent();
console.log(orderIdDetails);
await expect(orderIdDetails.includes(cleanedOrderIdText)).toBeTruthy();
//await page.pause();


});




