const { SearchComponent } = require('../components/searchComponent');

class HomePage {
    constructor(page) {
        this.page = page;
        this.path = '/';
        this.searchComponent = new SearchComponent(page);
        this.navigationBarSelector= 'nav[class="navigation"]';
    }

    // Navigate to the home page
    async navigate() {
        await this.page.goto(`${BASE_URL}${this.path}`);
        await Promise.all([
            this.page.waitForSelector(this.navigationBarSelector, { state: 'visible'}),
            this.searchComponent.searchInputSelector, { state: 'visible' },
        ])};

    // Method to search for an item
   
}

module.exports = { HomePage };
