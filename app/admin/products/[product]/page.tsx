'use client'
import Image from 'next/image'
import { useState } from 'react';
import { Button } from 'primereact/button';
import Single from '@/components/Product/Single';

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <main>
            <Single />
        </main>
    )
}
