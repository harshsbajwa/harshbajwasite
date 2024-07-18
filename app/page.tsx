'use client';

import React from 'react'
import Cursor from "./components/cursor";
import { useState } from 'react';

export default function Page() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className=''>
            <h1 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-6xl z-999">
                hi, my name is harsh.
            </h1>
            <Cursor isActive={isActive}/>
        </div>
    )
}
