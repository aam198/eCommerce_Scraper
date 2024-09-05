import puppeteer from "puppeteer";

const scrape = async() => {
  // Launch Headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Initial page to search
  // const url = 'https://wegmans.com';
  // const url = 'https://shop.wegmans.com/shop/categories/501';
  const url = 'https://books.toscrape.com';
  // Gives: Attention Required! | Cloudflare
  // const url = 'https://www.weismarkets.com/';
  // GiantFoods is giving: Site Temporarily Down
  // const url = 'https://giantfoodstores.com';

  // Test for page title
  // await page.goto(url);

  const books = await page.evaluate(() => {
    const bookElements = document.querySelectorAll('.product_pod');
      return bookElements;
  });
  
  console.log(books);

  // 
  // Grocery Start Section
  // 

  // Evaluate method allows to run javascript in the context of the page and select data using query selector etc
  // const meats = await page.evaluate(() => {
    // Get the element that surrounds the data
    // const productElements = document.querySelectorAll(`[data-test*="item-tile-name-button"]`);
    // Since we can't console.log we need to return
    // return productElements;
  // });

  // console.log(meats);

  // 
  // Grocery End Section
  // 

  // Select what we want
  // Getting the title
  // const title= await page.title();
  // console.log(`Page Title: ${title}`);

  // Close browser close
  await browser.close();
};

// Call the function
scrape();