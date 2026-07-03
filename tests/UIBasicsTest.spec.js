const {test,expect }=require('@playwright/test');


test('@web Browser context validating error login', async ({browser})=>{
//Async is used to wait for the page to load before performing any actions
//Chrome browser is used to launch the browser

const context=await browser.newContext();
const page=await context.newPage();
page.route('**/*.{jpg,png,jpeg}', route=>route.abort());
const username=page.locator('#username');
const signInBtn=page.locator('#signInBtn');
const cardTitles=page.locator('.card-body a');
page.on('request', request => console.log(request.url()));
page.on('response', response => console.log(response.url(),response.status()));
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());
await username.fill('rahulshetty');
await page.locator("[name='password']").fill('Learning@830$3mK2');
await signInBtn.click();
//wait for the error message to appear
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//type fill
await username.fill("");
await username.fill('rahulshettyacademy');
await signInBtn.click();
await page.pause();
//console.log(await cardTitles.first().textContent());
//console.log(await cardTitles.nth(1).textContent());

const cardTitlesText=await cardTitles.allTextContents();

console.log(cardTitlesText);



});

test('@web UI Controls', async ({page})=>{
//Async is used to wait for the page to load before performing any actions
//Chrome browser is used to launch the browser

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');   
const username=page.locator('#username');
const signInBtn=page.locator('#signInBtn');
const dropdown=page.locator("select.form-control");

const documentLink=page.locator("a[href*='documents-request']");
await dropdown.selectOption("consult");
//await page.pause();
await page.locator(".radiotextsty").last().click();

await page.locator("#okayBtn").click();
console.log(await page.locator(".radiotextsty").last().isChecked());
expect(page.locator(".radiotextsty").last()).toBeChecked();

await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();
await expect(documentLink).toHaveAttribute("class","blinkingText");



});


test('Child wondow Controls', async ({browser})=>{

const context=await browser.newContext();
const page=await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');   
const documentLink=page.locator("a[href*='documents-request']");

const [newPage]=await Promise.all([
 context.waitForEvent('page'),
 documentLink.click(),
]) ;
const text=await newPage.locator(".red").textContent();
const arraytext=text.split("@");
const emailDomain=arraytext[1].split(" ")[0];
console.log(emailDomain);
await page.locator('#username').fill(emailDomain);

console.log(await page.locator('#username').textContent()); 


});