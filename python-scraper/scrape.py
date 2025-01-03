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

# Entry point
def main():
  fetch_books(1)

# Run the function
if __name__ == "__main__":
    main()