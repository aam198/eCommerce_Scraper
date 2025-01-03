import requests
from bs4 import BeautifulSoup
import json

def fetch_books(page_number):
  url = f"https://books.toscrape.com/catalogue/page-{page_number}.html"
  # To get response 
  response = requests.get(url)
  # Create an object
  soup = BeautifulSoup(response.text, 'html.parser')

  # Test, which will print out the entire website in html format
  # print(soup.prettify())

  # specify the data we want to extract
  books = []

  # accessing soup object and using a method to retrieve specific data, <article> with attribute class = product_pod
  book_elements = soup.find_all('article', class_='product_pod')

  for book in book_elements:
    # within <article> this finds the title, by locating the child h3 and the next child that is <a> with attribute title 
    title = book.find('h3').find('a')['title']
    # print (title)

    # Get Price
    price = book.find('p', class_='price_color').text

    # Check if in stock or out of stock
    stock = 'In stock' if 'In stock' in book.find('p', class_='instock availability').text else 'Out of Stock'

    # Get rating, since there can be more than one rating as a class, we can make it into a list and select the second item
    rating = book.find('p', class_='star-rating')['class'][1]
    
    # Extracting the link by finding <a> with href attribute. This gives us a route so we will fix this in the books object
    link = book.find('h3').find('a')['href']
    
    # Pass into array
    books.append({
      'title': title,
      'price': price,
      'stock': stock,
      'rating': rating,
      'link': f"https://books.toscrape.com/catalogue/{link}"
    })
  return(books)


# Entry point
def main():
  # List of all books
  all_books = []
  max_pages = 10

  for current_page in range(1, max_pages + 1):
    books_on_page = fetch_books(current_page)
    all_books.extend(books_on_page)

    print(f"Books on page {current_page}: {books_on_page}")
          
# Run the function
if __name__ == "__main__":
    main()