import React from 'react'

function  getScreenSize() {
    const width=window.innerWidth;
  
    if (width>=1200){
      return 'xl';
    } else if(width>=992){
      return 'lg';
    }else if (width>=768){
      return 'xl';
    }else if (width>=576){
      return 'md';
    }else{
      return'xs';
    }
  }
export default windowWidth
function evaluateScreenSize() {
  const width = window.innerWidth;
  let size = '';

  if (width < 576) {
    size = 'xs';
  } else if (width >= 576 && width < 768) {
    size = 'sm';
  } else if (width >= 768 && width < 992) {
    size = 'md';
  } else if (width >= 992 && width < 1200) {
    size = 'lg';
  } else if (width >= 1200) {
    size = 'xl';
  }

  console.log(`Screen size: ${size}`);
}

window.addEventListener('resize', evaluateScreenSize);