// searchProduct
import { test, expect } from '@playwright/test';
require('dotenv').config();
const { SearchPage } = require('./SearchPage'); 

test('SearchProduct', async ({ page }) => {
  const searchPage = new SearchPage(page); 

  await page.goto(process.env.URL); 

  await searchPage.searchForProduct(process.env.Productname); 
  await searchPage.clickOnProduct();
});


//FiltterProduct
const { FilterPage } = require('./FilterPage');

test('filtterProduct', async ({ page }) => {
  const filterPage = new FilterPage(page);
  await page.goto(process.env.URL);

  await filterPage.selectRecipient();
  await filterPage.selectInterest();
  await filterPage.selectOccasion();
  await filterPage.applyFilters();

});



//SortProduct
const { SortPage } = require('./SortPage'); 
test('sortProduct', async ({ page }) => {
  const sortPage = new SortPage(page);  

  await page.goto(process.env.URL);  

  
  await sortPage.openAllGifts();
  await sortPage.openSortMenu();
  
  
  await sortPage.sortByPriceHighToLow();

 
  await sortPage.sortByPriceLowToHigh();

 
  
});

