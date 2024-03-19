class SearchComponent {
    constructor(page) {
        this.page = page;
        this.searchInputSelector = '#search';
    }

    // Method to search for an item
    async searchForItem(itemName) {
        await this.page.waitForSelector(this.searchInputSelector);
        await this.page.fill(this.searchInputSelector, itemName);
        await this.page.press(this.searchInputSelector, 'Enter');

    }
}

module.exports = { SearchComponent };
