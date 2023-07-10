'use client'

import { useState } from "react"
import { Chips } from 'primereact/chips';
import RadioGroup from "@/components/Radios/RadioGroup";
import { MyDialog } from "@/components/Product/Single";

type Tags = {
    id: number
    name: string
}
export default function Home() {
    const [value, setValue]: any = useState<Tags>()
    return (
        <main>
            <Chips value={value} onChange={(e) => setValue(e.value)} />
            <RadioGroup />
            <MyDialog />
            sumenda at aperiam sunt odio, veniam repudiandae enim ea. Vel, esse dolor.
        </main>
    )
}
