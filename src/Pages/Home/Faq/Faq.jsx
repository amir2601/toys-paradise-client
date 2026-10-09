import React from 'react';

const Faq = () => {
    const faqs = [
        {
            q: 'How can I sell my toys on your website?',
            a: 'To sell your toys on our website, you will need to create a account. Please visit our "Registration" page to find the necessary information and instructions. Once your account is set up, you can list your toys, set prices, and manage your inventory through our my toys page.',
        },
        {
            q: 'Are there any requirements to become a seller on your website?',
            a: 'Yes, we have certain requirements for sellers to ensure the quality and safety of products. These requirements may include providing product information, meeting safety standards, and adhering to our seller policies. Please review our seller guidelines or contact our seller support team for more details.',
        },
        {
            q: 'How do I manage my inventory and product listings?',
            a: 'Once you have created a account, you can access my toys page, where you will find tools to manage your inventory and product listings. You can add new products, update prices and quantities.',
        },
        {
            q: 'How can I contact seller support for assistance?',
            a: 'You can reach our seller support contact information provided on our website. We are available to assist you with any questions, concerns, or technical issues related to selling on our platform.',
        },
    ];

    return (
        <section className='section'>
            <div className='mb-10 text-center'>
                <span className='eyebrow'>Need help?</span>
                <h2 className='section-title mt-3'>Frequently Asked Questions</h2>
            </div>

            <div className='flex flex-col items-center gap-10 md:flex-row'>
                <div className='w-full space-y-3 md:w-6/12'>
                    {
                        faqs.map((faq, index) => (
                            <div key={index} tabIndex={0} className='collapse collapse-plus card-surface overflow-hidden !rounded-2xl transition-shadow duration-300 hover:shadow-card'>
                                <div className="collapse-title text-lg font-semibold text-slate-800">
                                    {faq.q}
                                </div>
                                <div className="collapse-content text-sm leading-relaxed text-slate-500">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-full md:w-6/12'>
                    <div className='relative'>
                        <div className='absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-violet-400/40 to-amber-300/40 blur-3xl'></div>
                        <img className='mx-auto w-80 animate-float md:w-96' src="https://i.ibb.co/k5vCRts/FAQs-amico.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
