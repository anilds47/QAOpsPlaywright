const {test,expect,request}=require('@playwright/test');
const {APIUtils}=require('../utils/APIUtils');

const loginpayload = {
    userEmail: "anildshiva@gmail.com",
    userPassword: "Dsa@2026"
};
const orderpayload = {
    orders: [
        {
            country: "India",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]
};
let response;


test.beforeAll(async () => {
   const apiContext = await request.newContext();
   const apiUtils = new APIUtils(apiContext,loginpayload);
   response=await apiUtils.createOrder(orderpayload);

});

test('@Api Place an order', async ({page})=>{


    page.addInitScript(value => {
        window.localStorage.setItem("token", value);
    }, response.token);

await page.goto('https://rahulshettyacademy.com/client');

const products=page.locator(".card-body");
const productName="ZARA COAT 3";
const email="anildshiva@gmail.com";
await page.locator('button:has-text("ORDERS")').click();
await page.locator("tbody").waitFor();
const rows=await page.locator("tbody tr");
for(let i=0; i< await rows.count(); ++i){

  const rowOrderId=await rows.locator("th").nth(i).textContent();
    if(response.orderId.includes(rowOrderId.trim()) ){
    await page.locator('tbody tr button.btn.btn-primary').nth(i).click()
    break;
}
}

const orderIdDetails=await page.locator(".col-text").textContent();
//await page.pause();
console.log(orderIdDetails);
await expect(response.orderId.includes(orderIdDetails.trim())).toBeTruthy();
//await page.pause();


});


