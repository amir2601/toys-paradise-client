import React from 'react';

const Faq = () => {
    return (
        <div className='my-8'>
            <h2 className='text-3xl font-bold text-center'>Frequently Asked Questions !!!</h2>
            <hr className='my-3' />

            <div className='flex flex-col md:flex-row justify-center items-center gap-10 text-center'>
                <div className='md:w-6/12'>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How can I sell my toys on your website?
                        </div>
                        <div className="collapse-content">
                            <p> To sell your toys on our website, you will need to create a account. Please visit our "Registration" page to find the necessary information and instructions. Once your account is set up, you can list your toys, set prices, and manage your inventory through our my toys page.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Are there any requirements to become a seller on your website?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we have certain requirements for sellers to ensure the quality and safety of products. These requirements may include providing product information, meeting safety standards, and adhering to our seller policies. Please review our seller guidelines or contact our seller support team for more details.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        How do I manage my inventory and product listings?
                        </div>
                        <div className="collapse-content">
                            <p>Once you have created a account, you can access my toys page, where you will find tools to manage your inventory and product listings. You can add new products, update prices and quantities.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        How can I contact seller support for assistance?
                        </div>
                        <div className="collapse-content">
                            <p>You can reach our seller support contact information provided on our website. We are available to assist you with any questions, concerns, or technical issues related to selling on our platform.</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-6/12'>
                    <img className='w-96 mx-auto' src="https://i.ibb.co/k5vCRts/FAQs-amico.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;