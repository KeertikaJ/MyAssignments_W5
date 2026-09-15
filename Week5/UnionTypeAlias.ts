//Union Type Alias
type paymentMethod = "UPI" | "CreditCard" | "PayPal";

function makePayment(paymentMode: paymentMethod) {
    console.log(`Selected Payment Mode: ${paymentMode}`);
}
makePayment("CreditCard");
makePayment("UPI");
