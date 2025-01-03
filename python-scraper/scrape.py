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
  print(soup.prettify())

# Entry point
def main():
  fetch_books(1)

# Run the function
if __name__ == "__main__":
    main()