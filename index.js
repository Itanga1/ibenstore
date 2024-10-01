/* Gallery */
let gallery2 = document.querySelector('#gallery-2');
let showMore = document.querySelector('#show-more');
let showLess = document.querySelector('#show-less');

function showGallery2(){
  gallery2.style.display = 'flex';
  showMore.style.display = 'none';
}
function hideGallery2(){
  gallery2.style.display = 'none';
  showMore.style.display = 'inline-block';
}

showMore.addEventListener('click', showGallery2);
showLess.addEventListener('click', hideGallery2);

/*Dropdown menu */
function dropdownMenu(){
  let dropdown = document.getElementById('menu-dropdown');
  if(dropdown.style.display==='none'){
    dropdown.style.display='flex';
  }else{
    dropdown.style.display='none';
  }
}

/* Products tab management */

function products(){
  let rolex = document.querySelector('#rolex');
  let omega = document.querySelector('#omega');
  let patek = document.querySelector('#patek');
  let apple = document.querySelector('#apple');
  
  let brand = document.querySelector('#select-brand');
  let selectedValue = brand.value;

  if(selectedValue==='Rolex'){  
    rolex.style.display='grid';
    omega.style.display ='none';
    patek.style.display='none';
    apple.style.display='none';
  }else if(selectedValue==='Omega'){
    omega.style.display ='grid';
    rolex.style.display='none';
    patek.style.display='none';
    apple.style.display='none';
  }else if(selectedValue=='Patek Philippe'){
    patek.style.display='grid';
    omega.style.display ='none';
    rolex.style.display='none';
    apple.style.display='none';
  }else if(selectedValue=='Apple'){
    apple.style.display='grid';
    patek.style.display='none';
    omega.style.display ='none';
    rolex.style.display='none';
  }
}



/* const element = document.getElementById('menu');
element.addEventListener('click', dropdownMenu); 
*/