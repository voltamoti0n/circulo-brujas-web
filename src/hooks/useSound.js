import { useRef, useEffect, useCallback } from 'react';

const useSound = (src) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (src) {
      audioRef.current = new Audio(src);
      audioRef.current.load();
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src]);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => console.error('Error playing sound:', error));
    }
  }, []);

  return play;
};

export default useSound;