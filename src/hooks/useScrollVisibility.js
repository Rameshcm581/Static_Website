// src/hooks/useScrollVisibility.js — true while scrollY is inside a range of the document
import { useEffect, useState } from 'react';

export default function useScrollVisibility({ after = 1200, beforeEnd = 1400 } = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const limit = document.body.scrollHeight - beforeEnd;
      setVisible(y > after && y < limit);
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [after, beforeEnd]);

  return visible;
}
