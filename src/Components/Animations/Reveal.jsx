import React from 'react';
import { motion } from 'framer-motion';

/**
 * Directional scroll-reveal wrapper.
 * Animates children in the moment the element enters the viewport.
 */
const directions = {
    up: { hidden: { opacity: 0, y: 44 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -44 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -56 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 56 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } },
    blur: {
        hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
};

const ease = [0.16, 1, 0.3, 1];

const Reveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.75,
    amount = 0.2,
    once = true,
    className,
    style,
    ...rest
}) => {
    const variant = directions[direction] || directions.up;

    return (
        <motion.div
            className={className}
            style={style}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            transition={{ duration, delay, ease }}
            {...rest}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
