class CheckOutPage {
    constructor(page) {
        this.page = page;
        this.allGiftsLink = page.getByRole('link', { name: 'All Gifts' });
        this.blueberryCakeLink = page.getByRole('link', { name: 'Best Seller blueberry cake' }).first();
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
        this.topNavButton = page.getByRole('navigation', { name: 'Top' }).getByRole('button').nth(1);
        this.proceedToCheckoutButton = page.getByRole('button', { name: 'Proceed To Checkout' });
    }

    async goToPage(url) {
        await this.page.goto(url);
        await this.page.waitForTimeout(3000);
    }

    async addItemToCart() {
        await this.allGiftsLink.click();
        await this.page.waitForTimeout(3000);
        await this.blueberryCakeLink.click();
        await this.page.waitForTimeout(3000);
        await this.addToCartButton.click();
        await this.page.waitForTimeout(2000);
        await this.page.evaluate(() => window.scrollTo(0, 0));
        await this.topNavButton.click();
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }
}

module.exports = CheckOutPage;
