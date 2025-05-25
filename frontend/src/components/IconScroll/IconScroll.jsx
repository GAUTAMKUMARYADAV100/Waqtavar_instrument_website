import React from 'react';
import { TbArrowsHorizontal } from 'react-icons/tb';
import './IconScroll.css';

const IconScroll = () => {
  return (
    <div className="tscroll" aria-label="Scroll Indicator">
      <TbArrowsHorizontal size={24} color="var(--color-text)" />
    </div>
  );
};

export default IconScroll;
