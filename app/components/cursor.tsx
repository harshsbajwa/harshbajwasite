'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const colors = [
    "#356fdb",
    "#457ec4",
    "#f5c63f",
    "#c32d27",
];

export default function Cursor({ isActive }) {
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorRef = useRef(null);
    const circlesRef = useRef([]);
    const [circleSizes, setCircleSizes] = useState([]);

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
        const { x, y } = mousePos.current;
        const currentX = parseFloat(cursorRef.current.style.left || 0);
        const currentY = parseFloat(cursorRef.current.style.top || 0);
        const newCursorX = lerp(currentX, x, 1); // Increase lerp factor for faster movement
        const newCursorY = lerp(currentY, y, 1); // Increase lerp factor for faster movement

        gsap.set(cursorRef.current, { x: newCursorX, y: newCursorY });

        circlesRef.current.forEach((circle, i) => {
            const delayFactor = 0.5 * (i + 1); // Decrease delay factor for more responsive movement
            gsap.to(circle, { x: newCursorX, y: newCursorY, duration: delayFactor });
        });

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove);
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
        };
    }, []);

    useEffect(() => {
        const newSizes = [...Array(4)].map(() => (isActive ? 200 : 30));
        setCircleSizes(newSizes);
    }, [isActive]);

    return (
        <div className=''>
            {circleSizes.map((size, i) => (
                <div
                    className='fixed rounded-full mix-blend-difference pointer-events-none'
                    key={i}
                    ref={ref => circlesRef.current[i] = ref}
                    style={{
                        backgroundColor: colors[i],
                        width: size,
                        height: size,
                        filter: `blur(${isActive ? 20 : 2}px)`,
                        transition: `width 0.3s ease-out, height 0.3s ease-out, filter 0.3s ease-out`,
                        position: 'fixed',
                        left: '0%',
                        top: '0%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
            <div
                ref={cursorRef}
                style={{
                    backgroundColor: "#ffffff",
                    width: '12px',
                    height: '12px',
                    filter: `blur(${isActive ? 30 : 0}px)`,
                    transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
                    position: 'fixed',
                    left: '0%',
                    top: '0%',
                    transform: 'translate(-50%, -50%)',
                }}
                className='fixed rounded-full mix-blend-difference pointer-events-none'
            />
        </div>
    );
}
