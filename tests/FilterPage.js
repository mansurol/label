// filterPage.js
class FilterPage {
  constructor(page) {
    this.page = page;
    this.forWhoPlaceholder = 'Who is it for?';
    this.whatTheyLikePlaceholder = 'What do They Like?';
    this.occasionPlaceholder = 'What’s the occasion?';
    this.showResultButton = 'Show Result';
  }

  async selectRecipient() {
    await this.page.getByPlaceholder(this.forWhoPlaceholder).click();
    await this.page.getByRole('option', { name: 'For Him' }).click();
    await this.page.waitForTimeout(3000);
  }

  async selectInterest() {
    await this.page.getByPlaceholder(this.whatTheyLikePlaceholder).click();
    await this.page.getByRole('option', { name: 'Book Lovers' }).click();
    await this.page.waitForTimeout(3000);
  }

  async selectOccasion() {
    await this.page.getByPlaceholder(this.occasionPlaceholder).click();
    await this.page.getByRole('option', { name: 'Easter Gifts' }).click();
    await this.page.waitForTimeout(3000);
  }

  async applyFilters() {
    await this.page.getByRole('button', { name: this.showResultButton }).click();
  }
}

module.exports = { FilterPage }; 
