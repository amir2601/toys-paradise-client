import React from 'react';
import Reveal from '../Animations/Reveal';

/**
 * Consistent animated section header: eyebrow pill → title → subtitle.
 * `title` accepts a node so callers can drop in <span className="text-gradient">.
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', className = '' }) => {
    const alignment =
        align === 'center'
            ? 'items-center text-center'
            : 'items-start text-left';

    return (
        <Reveal direction="up" className={`flex flex-col ${alignment} ${className}`}>
            {eyebrow && (
                <span className="eyebrow">
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500 align-middle" />
                    {eyebrow}
                </span>
            )}
            <h2 className="section-title mt-3">{title}</h2>
            {subtitle && (
                <p className={`mt-3 max-w-xl text-sm leading-relaxed text-slate-500 ${align === 'center' ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </Reveal>
    );
};

export default SectionHeading;
