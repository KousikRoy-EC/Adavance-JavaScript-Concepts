// A Promise in JavaScript is an object that represents the eventual completion or 
// failure of an asynchronous operation. It provides a mechanism to attach callbacks
// to be executed when the async operation either resolves with a value or rejects with
// an error. A Promise can be in one of three states: Pending, Resolved, or Rejected.
// promise objects are immutable.

// Promise chaining
// Return statement in the then() callback function helps in data flow within promise chainings.

getProductById(123)
  .then(function (product){
    return getReviewsForProduct(product);
  })
  .then(function (reviews) {
    return getRecommendedProducts(reviews);
  })
  .then(function(recommendedProducts){
    console.log(recommendedProducts);
  })
  .catch(error => {
    console.log(error);
  });


// create our own promise object

let cart=["Shoes","T-shirt","Jeans"];

const promise2=createOrder(cart);

promise.then(orderID => proceedToPayment(orderID));

function createOrder(cart){
    let pr=new Promise((resolve,reject)=>{
       
      if(validateCart(cart)){
        resolve("Order Created");
      }
      else{
        reject("Invalid Cart");
      }
    });
  }

  function validateCart(cart){
    return true;
  }



  