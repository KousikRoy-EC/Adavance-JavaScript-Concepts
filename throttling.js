// Throttling or sometimes also called throttle function is a practice used in websites. 
// Throttling is used to call a function after every millisecond or a particular interval
//  of time only the first click is executed immediately.



const throttle = (fun, limit) => {
    let isThrottle=true;
   return function() {
    let context=this;
    let args=arguments;
         if (isThrottle){
              fun.apply(context, args);
              isThrottle = false;
              setTimeout(() => {
                isThrottle = true;
              }, limit);
         }
    }
}

const betterFunction = throttle(expensiveFunction, 500);

const expensiveFunction = () => {
    console.log('expensive function called')
}

window.addEventListenet('resize', betterFunction);