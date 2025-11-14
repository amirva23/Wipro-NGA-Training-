// Day 18 - Generate Invoice Using Async/Await

function generateInvoice(order) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Invoice generated for ${order.item} - Rs.${order.price}`);
        }, 1000);
    });
}

async function run() {
    try {
        const order = { id: 1, item: "Pizza", price: 299 };
        const invoice = await generateInvoice(order);
        console.log(invoice);
    } catch (err) {
        console.log("Error:", err);
    }
}

run();
