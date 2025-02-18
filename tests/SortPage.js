// sortPage.js
class SortPage {
  constructor(page) {
    this.page = page;

  }

  // Navigate to the "All Gifts" page
  async openAllGifts() {
    await this.page.getByRole('link', { name: 'All Gifts' }).click();
  }

  // Click on the sort button
  async openSortMenu() {
    await this.page.getByRole('button', { name: 'Sort By: Default' }).click();
  }

  // Sort by Price High To Low
  async sortByPriceHighToLow() {
    await this.page.getByRole('button', { name: 'Price High To Low' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Sort By: Price High To Low' }).click();
    await this.page.waitForTimeout(1000);
  }

  // Sort by Price Low To High
  async sortByPriceLowToHigh() {
    await this.page.getByRole('button', { name: 'Price Low To High' }).click();
    await this.page.waitForTimeout(1000);

  }

  
}

module.exports = { SortPage };
