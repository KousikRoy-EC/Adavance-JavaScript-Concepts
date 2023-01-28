// Callback hell is a term used to describe a situation in JavaScript where multiple 
// nested callbacks make the code difficult to read and understand. It occurs when a 
// callback function is passed as an argument to another function and that callback 
// function in turn is passed as an argument to another function, and so on, creating 
// a "pyramid" or "chain" of callback functions. This can lead to code that is difficult
//  to follow, debug, and maintain. It can be addressed by using promises or async/await.



// disadvantages of callback

// 1. Callback Hell

let cartItem=["Laptop","Mobile","Tablet","Watch","Headphones"];

API.addToCart(cartItem,function () {
    API.proceedToPayment(function(){
        API.showOrderSummary(function(){
            API.placeOrder();
        })
    })
})
 

// 2. Inversion of controls

// When we give the control of callbacks being called to some
//  other API, this may create a lot of issues. That API may be buggy,  may not call our 
//  callback and create order as in the above example, may call the payment callback twice
//   etc.






















