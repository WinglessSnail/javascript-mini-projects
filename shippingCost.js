userBasket=[
    {id:1 , name : 'big TV',price:2500.00},
    {id:2 , name : 'laptop',price:1500.00},
    {id:3 , name : 'small TV',price:1000.00},
    {id:4 , name : 'very smart phone',price:1600.00},
    {id:5 , name : 'ear buddies',price:300.00},
    {id:6 , name : 'bigger ear buddies',price:500.00},
    {id:7 , name : 'watch',price:600.00},
]
var includeShipping=userBasket.filter(function(product){
    return product.price <1000.00
})
var shippingCost=includeShipping.length*100.00
var totalPrice=0
userBasket.forEach(function(product){
    totalPrice+=product.price
})
var totalsum= totalPrice+shippingCost
console.log("your shipping cost : "+shippingCost+"\ntotal price : "+totalsum) 


