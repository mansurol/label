// searchPage.js
class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = '#search';
    this.productLink = 'a[href="/product-detail/blueberry-cake"]';
  }

  async searchForProduct(query) {
    await this.page.locator(this.searchInput).click();
    await this.page.locator(this.searchInput).fill(query);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(3000);
  }

  async clickOnProduct() {
    await this.page.locator(this.productLink).first().click();
    await this.page.waitForTimeout(3000);
  }
}

module.exports = { SearchPage };
