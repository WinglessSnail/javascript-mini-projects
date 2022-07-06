var products = [
    {id: 1, name: 'big TV', price : '$2,000.00'},
    {id: 2, name: 'bigger TV', price : '$2800.00'},
    {id: 3, name: 'small TV', price : '$1100.00'},
    {id: 4, name: 'not so small TV', price : '$1500.00'},
    {id: 5, name: 'headphone max', price : '$500.00'},
    {id: 6, name: 'air phone pro', price : '$250.00'},
    {id: 7, name: 'cherry watch', price : '$350.00'},
    {id: 2, name: 'cherrybook light', price : '$1500.00'},]

var basket = [
    {id: 1, name: 'big TV', price : '$2,000.00'},
    {id: 2, name: 'not so small TV', price : '$1500.00'},
    {id: 3, name: 'cherry watch', price : '$350.00'},
];
var userproduct = prompt("1. add item \n 2. remove item  ");
if (userproduct === '1'){
    var userproduct = prompt("Enter item name ")
    var productdata
    var isavailable= products.some(function (product) {
        if(product.name === userproduct){
            productdata = product
            return true
        }
    })
    if (isavailable === true){
        var newproduct = {
        id : 3,
        name : productdata.name,
        price: productdata.price,}
        basket.push(newproduct)
        console.log(basket)
    }
    else{
        alert("out of stock")
    }
}
else if (userproduct === '2'){
    var userProduct = prompt("Enter item name ")
    var productindex = basket.findIndex(function (product) {
        return product.name === userProduct
        })
    basket.splice(productindex,1)
    console.log(basket)
}
else{
    alert("invalid input");
}