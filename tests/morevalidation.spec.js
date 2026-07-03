const {test,expect}=require('@playwright/test')

//test.describe.configure({mode:'serial'});

test("@web popup validation",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   // await page.goto("https://www.google.com/");
    //await page.goBack();
   // await page.goForward();

   await expect(page.locator("#displayed-text")).toBeVisible();
   await page.locator("#hide-textbox").click();
   await expect(page.locator("#displayed-text")).toBeHidden();
    //await page.pause();
    page.on("dialog",dialog=> dialog.accept());
    await page.locator("#confirmbtn").click();
    // await page.pause();
     await page.locator("#mousehover").hover();
    const framePage=  page.frameLocator("#courses-iframe");
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck=await framePage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1].trim());

});


test("Screenshot and Visual comparision",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   

   await expect(page.locator("#displayed-text")).toBeVisible();
   await page.locator('#displayed-text').screenshot({path:'partialscreenhot.png'});
   await page.locator("#hide-textbox").click();
   await page.screenshot({path: 'screenshot.png'});
   await expect(page.locator("#displayed-text")).toBeHidden();
   

});

test(" Visual comparision",async({page})=>{

    await page.goto("https://time.is/");
   

    expect(await page.screenshot()).toMatchSnapshot('landing.png');
  
});