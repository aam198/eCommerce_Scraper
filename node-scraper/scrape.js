import puppeteer from "puppeteer";

const scrape = async() => {
  // Launch Headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Initial page to search
  const url = 'https://books.toscrape.com';
  // const url = 'https://giantfoodstores.com';

  await page.goto(url);

  // Select what we want
  // Getting the title
  const title= await page.title();

  console.log(`Page Title: ${title}`);

  // Close browser close
  await browser.close();
};

// Call the function
scrape();