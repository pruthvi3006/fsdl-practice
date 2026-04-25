let price = 10;
let qty = 1;

function changeQty(change) {
    qty += change;

    if (qty <= 0) {
        qty = 0;
        document.getElementById("qty").innerText = qty;
        document.getElementById("total").innerText = "Your Cart is empty";
        return; // stop further execution
    }

    document.getElementById("qty").innerText = qty;
    document.getElementById("total").innerText = qty * price;
}