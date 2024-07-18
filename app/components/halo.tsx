import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Halo = ({ text, isActive }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(textRef.current, {
        duration: 1,
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff',
        ease: 'power2.inOut'
      });

      return () => {
        tl.kill(); 
      };
    } else {
      gsap.set(textRef.current, { textShadow: 'none' }); 
    }
  }, [isActive]);

  return (
    <span ref={textRef} style={{ color: '#fff', textAlign: 'center', fontSize: '3rem' }}>
      {text}
    </span>
  );
};

export default Halo;