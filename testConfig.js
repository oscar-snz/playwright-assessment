const { HomePage } = require('./pages/homePage');
const { SearchResultsPage } = require('./pages/searchResultsPage');
const { ShippingPage } = require('./pages/shippingPage');
const { OrdersAndReturnsPage } = require('./pages/ordersAndReturnsPage');



// Configuration object
const config = {
    pages: {
        "home": HomePage,
         "search results": SearchResultsPage,
         "shipping": ShippingPage,
         "orders and returns": OrdersAndReturnsPage
        
    },
};

module.exports = config;
