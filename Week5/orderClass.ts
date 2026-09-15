//Create Class, Property, Method and Constructor  
class Order {
    public productName: string;
    protected orderId: string;
    private price: number;

    constructor(product: string, orderID: string, priceOfProduct: number) {
        this.productName = product;
        this.orderId = orderID;
        this.price = priceOfProduct;
        console.log(`Order created successfully for ${product}`);
    }
    placeOrder() {
        console.log(`Order placed for ${this.productName} with order id ${this.orderId}`)
    }
    cancelOrder() {
        console.log(`Order cancelled for ${this.productName}`);
    }
}

const orderObj = new Order("iPhone 16", "ORD123", 85000);
orderObj.placeOrder();
orderObj.cancelOrder();


