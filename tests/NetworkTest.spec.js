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
let fakePayload={
    data: [],
    message: "No Orders"
};


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
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
async (route) => {
    const response = await page.request.fetch(route.request());
    let body=JSON.stringify(fakePayload);
    await route.fulfill({  
        response,
        body
     });

    //intercepting the response -> {playwright fake response } -> broswer

});


await page.locator('button:has-text("ORDERS")').click();
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
//await page.pause();
console.log(await page.locator(".mt-4").textContent());



});


