import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Reveal from '../../../Components/Animations/Reveal';
import SectionHeading from '../../../Components/UI/SectionHeading';

const ease = [0.16, 1, 0.3, 1];

const faqs = [
    {
        q: 'How can I sell my toys on your website?',
        a: 'To sell your toys on our website, you will need to create an account. Please visit our "Registration" page to find the necessary information and instructions. Once your account is set up, you can list your toys, set prices, and manage your inventory through our My Toys page.',
    },
    {
        q: 'Are there any requirements to become a seller?',
        a: 'Yes, we have certain requirements for sellers to ensure the quality and safety of products. These requirements may include providing product information, meeting safety standards, and adhering to our seller policies. Please review our seller guidelines or contact our seller support team for more details.',
    },
    {
        q: 'How do I manage my inventory and product listings?',
        a: 'Once you have created an account, you can access the My Toys page, where you will find tools to manage your inventory and product listings. You can add new products, update prices and quantities, and remove sold-out items in seconds.',
    },
    {
        q: 'How can I contact seller support for assistance?',
        a: 'You can reach our seller support team using the contact information provided on our website. We are available 24/7 to assist you with any questions, concerns, or technical issues related to selling on our platform.',
    },
    {
        q: 'What is your return and refund policy?',
        a: 'Every order is covered by our 30-day happy-kid guarantee. If something is not quite right, contact us with your order number and we will arrange a free return, exchange or full refund — no restocking fees, no fuss.',
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className='section'>
            <SectionHeading
                eyebrow='Need help?'
                title={<>Frequently Asked <span className='text-gradient'>Questions</span></>}
                subtitle='Quick answers to the things parents ask us most.'
            />

            <div className='mt-10 flex flex-col items-center gap-12 md:flex-row'>
                <div className='w-full space-y-4 md:w-7/12'>
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <Reveal key={index} direction='up' delay={index * 0.07}>
                                <div
                                    className={`card-surface overflow-hidden transition-all duration-300 ${
                                        isOpen ? 'border-violet-300 shadow-soft' : 'hover:shadow-card'
                                    }`}
                                >
                                    <button
                                        type='button'
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        aria-expanded={isOpen}
                                        className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6'
                                    >
                                        <span className={`text-sm font-bold transition-colors duration-200 sm:text-base ${isOpen ? 'text-violet-700' : 'text-slate-800'}`}>
                                            {faq.q}
                                        </span>
                                        <span
                                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                                                isOpen ? 'rotate-180 bg-violet-600 text-white' : 'bg-violet-100 text-violet-700'
                                            }`}
                                        >
                                            <FaChevronDown className='text-xs' />
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease }}
                                                className='overflow-hidden'
                                            >
                                                <p className='px-5 pb-5 text-sm leading-relaxed text-slate-500 sm:px-6'>
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal direction='right' className='w-full md:w-5/12'>
                    <div className='relative text-center'>
                        <div className='absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-gradient-to-tr from-violet-400/40 to-amber-300/40 blur-3xl'></div>

                        <div className='relative mx-auto w-fit'>
                            <span className='absolute -left-6 -top-4 animate-float text-3xl hover:animate-wobble'>🎈</span>
                            <span className='absolute -right-6 top-8 animate-float-slow text-3xl hover:animate-wobble'>🧸</span>
                            <img
                                className='mx-auto w-72 animate-float md:w-80'
                                src='https://i.ibb.co/k5vCRts/FAQs-amico.png'
                                alt='FAQ illustration'
                                loading='lazy'
                            />
                        </div>

                        <div className='glass mx-auto mt-6 max-w-xs rounded-2xl p-4 text-center'>
                            <p className='text-sm font-bold text-slate-800'>Still curious?</p>
                            <p className='mt-1 text-xs text-slate-500'>
                                Our team replies in under 2 hours, every day.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Faq;
