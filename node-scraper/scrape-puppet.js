import puppeteer from "puppeteer";

const scrape = async () => {
  // Launch Headless Browser
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();

  const url = 'https://books.toscrape.com';

  await page.goto(url);

  const books = await page.evaluate(() => {
    const bookElements = document.querySelectorAll('.product_pod');
    // Empty objects into an array of each product_pod
    return Array.from(bookElements).map((book) => {
      const title = book.querySelector('h3 a').getAttribute('title');
      const price = book.querySelector('.price_color').textContent;
      return price;
    })
  });

  console.log(books);

  await browser.close();
};

// Call the Function to start scrape
scrape();