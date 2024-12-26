// //const {test,chromium} = require('@playwright/test');

// test ('Launching the application url',async()=>{

//     const browser = await chromium.launch();
//     const page  = await browser.newPage();
//     await page.goto('https://www.youtube.com/');

// });//

const {test,chromium,expect}=require("@playwright/test");
const { url } = require("inspector");

test ("Laumching the application url", async()=>{
    const browser = await chromium.launch({
        headless : false
    });
    
    const context = await browser.newContext();
    const page = await browser.newPage();
    const url = "https://www.youtube.com/";
    await page.goto(url); 

await expect(page).toHaveURL(url);
await expect(page).toHaveTitle("YouTube");

await page.goto("https://www.facebook.com/");
await page.goBack();
await page.goForward();

await expect(page).toHaveURL("https://www.facebook.com/");
await page.waitForTimeout(5000);

const page2=await context.newPage();
await page2.goto("https://www.flipkart.com");

await page.waitForTimeout(5000);

const context2 = await browsr.newContext();
const page3 = await context2.newPage();

await page3.goto("https://www.amazon.in/")
await page.waitForTimeout(5000);

});