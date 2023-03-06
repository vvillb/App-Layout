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
