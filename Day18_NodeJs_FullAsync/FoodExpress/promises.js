// Day 18 - Process Payment Using Promises

function processPayment(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paymentSuccess = true; // change to false to test reject

            if (!paymentSuccess) {
                return reject("Payment failed!");
            }

            resolve({ ...order, status: "Paid" });
        }, 1000);
    });
}

processPayment({ id: 1, item: "Pizza", price: 299 })
    .then(result => console.log("Payment Result:", result))
    .catch(error => console.log("Error:", error));
