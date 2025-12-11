import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Assuming you create a CSS file for styling

const Scroll_to_top: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroll_to_top = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    scroll_to_top();
  }, [pathname]);

  return null;
};

export default Scroll_to_top;
