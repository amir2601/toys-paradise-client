import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

/**
 * Accessible read-only star rating.
 * Renders full / half / empty stars from a 0–5 value — no runtime dependency,
 * no legacy lifecycle warnings, crisp at any size.
 *
 * <Stars value={4.7} />
 */
const Stars = ({ value = 0, className = 'text-amber-400', size = 'text-sm' }) => {
    const rating = Math.max(0, Math.min(5, Number(value) || 0));

    return (
        <span
            className={`inline-flex items-center gap-0.5 ${size} ${className}`}
            role='img'
            aria-label={`Rated ${rating} out of 5`}
        >
            {[1, 2, 3, 4, 5].map((star) => {
                if (rating >= star) return <FaStar key={star} aria-hidden='true' />;
                if (rating >= star - 0.5) return <FaStarHalfAlt key={star} aria-hidden='true' />;
                return <FaRegStar key={star} aria-hidden='true' />;
            })}
        </span>
    );
};

export default Stars;
