import puppeteer from "puppeteer";
import fs from 'fs';

const scrape = async () => {
  // Launch Headless Browser
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  const url = 'https://books.toscrape.com';

  await page.goto(url);

  const books = await page.evaluate(() => {
    const bookElements = document.querySelectorAll('.product_pod');
    // Empty objects into an array of each product_pod
    return Array.from(bookElements).map((book) => {
      const title = book.querySelector('h3 a').getAttribute('title');
      const price = book.querySelector('.price_color').textContent;
      // when there are more than one class assigned 
      const stock = book.querySelector('.instock.availability') 
        ? 'In Stock' 
        : 'Out Of Stock';
      
      // Looks at class with star-rating, looks at overall classes within that p tag and splits at the space, then outputs the second class
      const rating = book.querySelector('.star-rating').className.split(' ')[1];
      const link = book.querySelector('h3 a').getAttribute('href');
  
      // To return all of the variables by creating an object
      return {
        title,
        price,
        stock,
        rating,
        link
      };

    });
  });

  // node print version
  console.log(books);

  // Using fs module to create books.json file to save results 

  console.log('Data saved to books.json');

  await browser.close();
};

// Call the Function to start scrape
scrape();