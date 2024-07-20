import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Halo = ({ text, isActive }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 1,
      textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff',
      ease: 'power2.inOut',
      repeat: 0, 
      yoyo: false
    });
  })

  return (
    <span ref={textRef}>
      {text}
    </span>
  );
};

export default Halo;
