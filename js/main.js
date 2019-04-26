(function() {
  'use strict'

  const top = document.getElementById("top");
  const nextbtn = document.getElementById("nextbtn");
  const backbtn = document.getElementById("backbtn");
  const pageTop = document.getElementById("page-top");

  let i = 0;

  top.src='img/top0' + i + '.jpg'

  nextbtn.addEventListener('click', moveNext, false);
  backbtn.addEventListener('click', moveBack, false);
  pageTop.addEventListener('click', moveTop, false);

  setInterval(moveNext, 3000);

function moveNext(){
  i++;
  i = (i % 3);
  top.src='img/top0' + i + '.jpg'
}

function moveBack(){
  i++;
  i = (i % 3);
  top.src='img/top0' + i + '.jpg'
}

function moveTop(){
  window.scrollTo(0,0);
}







})();
