import puppeteer from "puppeteer";

const scrape = async() => {
  // Launch Headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Initial page to search
  // const url = 'https://wegmans.com';
  const url = 'https://books.toscrape.com';
  // Gives: Attention Required! | Cloudflare
  // const url = 'https://www.weismarkets.com/';
  // GiantFoods is giving: Site Temporarily Down
  // const url = 'https://giantfoodstores.com';

  await page.goto(url);


  // Evaluate method allows to run javascript in the context of the page and select data using query selector etc
  const books = await page.evaluate(() => {
    // Get the element that surrounds the data
  });


  // Select what we want
  // Getting the title
  const title= await page.title();

  console.log(`Page Title: ${title}`);

  // Close browser close
  await browser.close();
};

// Call the function
scrape();