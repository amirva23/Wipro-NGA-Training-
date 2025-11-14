// Day 18 - Fetch Order Using Callbacks

function fetchOrder(orderId, callback) {
    setTimeout(() => {
        const success = true; // change to false to test error
        
        if (!success) {
            return callback("Order not found", null);
        }

        callback(null, { id: orderId, item: "Pizza", price: 299 });
    }, 1000);
}

fetchOrder(1, (err, order) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("Order fetched:", order);
});
