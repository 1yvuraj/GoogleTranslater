let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");
const { cachedDataVersionTag } = require("v8");

let args = minimist(process.argv);
//node GoogleTalk.js


async function run() {
    // start the browser
    let browser = await puppeteer.launch({
    
        
        headless: false,
       
        defaultViewport: null,
        args:[ '--window-size=1920,1040',"--disable-notifications"]
    });

    // get the tabs (there is only one tab)
    let pages = await browser.pages();
    let page = pages[0];

    // open the url
    await page.goto("https://www.google.com/");
  
    await page.waitForSelector("input.gLFyf.gsfi");
    await page.type("input.gLFyf.gsfi","Google Translate");
    await page.keyboard.press('Enter');
    await page.waitForSelector("span.source-language",{visible:true});

    await page.click("span.source-language");
    await page.waitForSelector("input#sl_list-search-box",{visible:true});
    await page.type("input#sl_list-search-box",args.FirstWord,{delay: 500});
    await page.keyboard.press('Enter');
    await page.waitForSelector("span.source-language",{visible:true});

    await page.click("span.target-language");
    await page.waitForSelector("span.target-language",{visible:true});
    await page.type("span.target-language",args.sWord,{delay: 500});
    await page.keyboard.press('Enter')
    await page.click("div#tw-source");
    await page.waitForSelector("div#tw-source",{visible:true});
    await page.type("div#tw-source",args.type,{delay: 500});
    
    
    
}

run();
//node GoogleTalk.js --FirstWord="english" --sWord="hindi" --type="Failure is the only high-road to success"
//node GoogleTalk.js --FirstWord="english" --sWord="urdu" --type="Failure is the only high-road to success"
//9266885819
//yuvrajaggarwal10@gmail.com