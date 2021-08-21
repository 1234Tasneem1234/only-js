function priceFixer(serviceId, productPrice) {
    const extraproductCost = document.getElementById(serviceId);
    extraproductCost.innerText = productPrice;
};

document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    priceFixer('extra-memory', 180, true);
    calculateTotal('extra-memory');
});

document.getElementById('usual-memory-btn').addEventListener('click', function () {
    priceFixer('extra-memory', '00', false);
    calculateTotal('extra-memory');
});

document.getElementById('usual-storage-btn').addEventListener('click', function () {
    priceFixer('extra-storage', '00');
    calculateTotal('extra-storage');

});

document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    priceFixer('extra-storage', 100);
    calculateTotal('extra-storage');
});

document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    priceFixer('extra-storage', 180);
    calculateTotal('extra-storage');
});

document.getElementById('free-shiping').addEventListener('click', function () {
    priceFixer('shiping-charge', '00');
    calculateTotal('shiping-charge');
});

document.getElementById('charge-shiping').addEventListener('click', function () {
    priceFixer('shiping-charge', 20);
    calculateTotal('shiping-charge');
});


function calculateTotal(productId, isPositive) {
    const totalPrice = document.getElementById('total-price');
    const productExtraCost = document.getElementById(productId);
    if (isPositive == true) {
        const totalPriceAmount = totalPrice.innerText = parseInt(productExtraCost.innerText) + parseInt(totalPrice.innerText);
        return totalPriceAmount;
    }
    else if (isPositive == false) {
        const totalPriceAmount = totalPrice.innerText = parseInt(totalPrice.innerText) - parseInt(productExtraCost.innerText);
        return totalPriceAmount;
    }
}
document.getElementById('total-price').innerText = document.getElementById('grand-total').innerText

