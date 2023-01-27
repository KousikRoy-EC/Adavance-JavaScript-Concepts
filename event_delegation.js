// Event delegation is a technique in JavaScript where you attach a single event 
// listener to a parent element, instead of attaching multiple event listeners to
//  individual child elements. The listener checks the event target to see if it 
//  matches the selector for the intended child element, and if it does, it runs 
//  the appropriate code. This can be more efficient and maintainable than attaching 
//  many listeners to multiple elements.

// adavntages of delegations

// 1. It is more efficient than attaching multiple event listeners to multiple elements.
// 2. Memory is conserved because only one event listener is attached to the parent element.
// 3. Less code is required
// 4. Dom manipulation is easier


// disadavantages if delegations

// 1. Not all event are bubbled up to the parent element so you can't use event delegation for all events.
// 2. Event delegation can be slower than attaching multiple event listeners to multiple elements.
// 3. If we use stop propagation then it will not work 

document.querySelector('#category').addEventListener('click', function(e) {
    console.log(e.target.id);
    if(e.target.tagName==='LI'){
    window.location.href= "/"+e.target.id;
    }
    })
    
