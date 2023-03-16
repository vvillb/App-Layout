
function GetScreenSize() {
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
return(size);
  
}

window.addEventListener('resize', GetScreenSize);

export default GetScreenSize;