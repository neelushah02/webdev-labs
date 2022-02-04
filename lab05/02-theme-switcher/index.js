/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const ocean = () => {
   document.querySelector("body").className = "ocean";
};

const def = () => {
   document.querySelector("body").className = "";
};

const desert = () => {
   document.querySelector("body").className = "desert";
};

const highcontrast = () => {
   document.querySelector("body").className = "high-contrast";
};

document.querySelector('#default').addEventListener('click', def);
document.querySelector('#ocean').addEventListener('click', ocean);
document.querySelector('#desert').addEventListener('click', desert);
document.querySelector('#high-contrast').addEventListener('click', highcontrast);