import { useEffect, useRef, useState } from 'react';

export default function useFlash(value) {
  const [flash, setFlash] = useState(false);
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return undefined;
    }
    if (!value) {
      return undefined;
    }
    const timer1 = setTimeout(() => {
      setFlash(true);
    }, 10);
    const timer2 = setTimeout(() => {
      setFlash(false);
    }, 550);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [value]);

  return flash;
}
