import React from 'react';
import Reveal from '../Animations/Reveal';

/**
 * Infinite dual-row marquee of partner / press names.
 * Duplicated content + CSS keyframes = perfectly smooth 50% loop.
 */
const BrandMarquee = ({ brands }) => {
    const row = [...brands, ...brands];

    return (
        <section className="section pb-2 pt-4">
            <Reveal direction="up" className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                    Trusted by toy lovers &amp; featured in
                </p>
            </Reveal>

            <div className="pause-on-hover relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div className="marquee-track flex w-max items-center gap-4 pr-4">
                    {row.map((brand, index) => (
                        <span
                            key={`${brand}-${index}`}
                            className="group flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:text-violet-700 hover:shadow-soft"
                        >
                            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-400 transition-transform duration-300 group-hover:scale-150" />
                            {brand}
                        </span>
                    ))}
                </div>
                {/* edge fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base-200 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base-200 to-transparent"></div>
            </div>
        </section>
    );
};

export default BrandMarquee;
