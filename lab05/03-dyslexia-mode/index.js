/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dys = () => {
  console.log(document.getElementById('#dyslexia-toggle').innerHTML)
  if(document.getElementById('#dyslexia-toggle').innerHTML=="Turn on Dyslexia Mode"){
    document.querySelector(".container").className = "dyslexia";
    document.getElementById('#dyslexia-toggle').innerHTML="Turn off Dyslexia Mode"

  }
  else if(document.getElementById('#dyslexia-toggle').innerHTML=="Turn off Dyslexia Mode"){
    document.querySelector(".dyslexia").className = "container";
    document.getElementById('#dyslexia-toggle').innerHTML="Turn on Dyslexia Mode"
  }
};

document.querySelector('#dyslexia-toggle').addEventListener('click', dys);
