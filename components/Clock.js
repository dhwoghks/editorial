'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const fetchTime = async () => {
            const res = await fetch('/api/time');
            const data = await res.json();
            setTime(data);
        };

        fetchTime();
        const id = setInterval(fetchTime, 1000);

        return () => clearInterval(id);
    }, []);

    return <span>{time}</span>;
}
