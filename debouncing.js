// Debouncing is a technique of delaying the execution of a function for a
// certain amount of time after it was last called. This is useful when you
// want to limit the number of times a function is called, for example when resizing 
// a window or when a user is typing in a search box.

let counter = 0;
const timer = () => {
    console.log("Couter value", counter++);
}

const debounce = (fun, delay) => {
    let timer_fn;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer_fn);
        timer_fn = setTimeout(() => {
            fun.apply(context, args);
        }, delay)
    }
}

const handleSearch = debounce(timer, 300);























