"use client"

import { useEffect } from 'react';

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const UPDATE = (e) => {
      for (const CARD of CARDS) {
        const rect = CARD.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        CARD.style.setProperty('--mouse-x', `${x}px`);
        CARD.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier}`}>
      <div className={`glow-card-${identifier} relative rounded-[26px]`}>
        <div className="glow-card-content">{children}</div>
      </div>
    </div>
  );
};

export default GlowCard;
