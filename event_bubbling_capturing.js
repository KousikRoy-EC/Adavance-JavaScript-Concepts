// In JavaScript, event bubbling and event capturing are two ways of propagating events through the Document Object Model (DOM).

// Event bubbling is the default behavior, where an event is first captured and handled by the innermost element, and then propagated to outer elements. For example, if a button is inside a div, and both have click event listeners, the button's event listener will be called first, followed by the div's event listener.

// Event capturing is the opposite of bubbling, where the event is first captured by the outermost element and then propagated to the inner elements. This is less commonly used and can be activated by setting the useCapture parameter to true when adding an event listener.

// You can use event.stopPropagation() to stop event bubbling or event.stopImmediatePropagation() to stop event capturing.

// the third argument of addEventListener is useCapture which is a boolean value by default it is false which resullt in bubbling mode if we made it to true then it will be in capturing mode

document.querySelector('#grandParent').addEventListener('click',()=>{
    console.log('grandParent Div Clicked')
},true);

document.querySelector('#parent').addEventListener('click',(e)=>{
    console.log('parent Div Clicked');
    e.stopPropagation();
},true);

document.querySelector('#child').addEventListener('click',()=>{
    console.log('child Div Clicked')
},true);























