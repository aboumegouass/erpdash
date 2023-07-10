'use client'
import Image from 'next/image'
import { useState } from 'react';
import { Button } from 'primereact/button';

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <main>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat optio et repudiandae sapiente nobis qui ipsa saepe eos! Enim autem doloribus deleniti est impedit aspernatur? Dignissimos fugit esse magni.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat optio et repudiandae sapiente nobis qui ipsa saepe eos! Enim autem doloribus deleniti est impedit aspernatur? Dignissimos fugit esse magni.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat optio et repudiandae sapiente nobis qui ipsa saepe eos! Enim autem doloribus deleniti est impedit aspernatur? Dignissimos fugit esse magni.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat optio et repudiandae sapiente nobis qui ipsa saepe eos! Enim autem doloribus deleniti est impedit aspernatur? Dignissimos fugit esse magni.
        </main>
    )
}
