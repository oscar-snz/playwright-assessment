
class CheckoutSuccessPage {
    constructor(page) {
        this.page = page;
        this.headerTitle = 'h1'
        this.orderText = "//div[@class='checkout-success']/p[1]";
    }


}
module.exports = {CheckoutSuccessPage};