const {test,expect }=require('@playwright/test');

test('nopcommerce login validation', async ({page})=>{
    await page.goto('https://www.nopcommerce.com/en/demo'); 

    await page.locator(".frontend-button").click();
    


});