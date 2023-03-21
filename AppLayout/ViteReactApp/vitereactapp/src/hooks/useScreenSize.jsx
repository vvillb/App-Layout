import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 576) {
        setScreenSize('xs');
      } else if (width >= 576 && width < 768) {
        setScreenSize('sm');
      } else if (width >= 768 && width < 992) {
        setScreenSize('md');
      } else if (width >= 992 && width < 1200) {
        setScreenSize('lg');
      } else if (width >= 1200) {
        setScreenSize('xl');
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;