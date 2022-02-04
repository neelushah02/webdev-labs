const makeBigger = () => {
   document.querySelector(".content").style.fontSize="40px";
   document.querySelector("h1").style.fontSize="40px";
};

const makeSmaller = () => {
   document.querySelector(".content").style.fontSize="20px";
   document.querySelector("h1").style.fontSize="20px";
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
