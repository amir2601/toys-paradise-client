import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Eased count-up number that starts when it scrolls into view.
 * e.g. <Counter to={250} suffix="+" duration={1600} />
 */
const Counter = ({ to, duration = 1600, decimals = 0, suffix = '', prefix = '', className }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let frame;
        const start = performance.now();
        const target = Number(to) || 0;

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutCubic — fast start, gentle settle
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, to, duration]);

    const formatted = Number(value).toFixed(decimals);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {formatted}
            {suffix}
        </span>
    );
};

export default Counter;
