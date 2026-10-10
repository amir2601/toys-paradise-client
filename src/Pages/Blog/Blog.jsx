import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaLock, FaServer, FaClock } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';
import PageTransition from '../../Components/Animations/PageTransition';
import SectionHeading from '../../Components/UI/SectionHeading';

const ease = [0.16, 1, 0.3, 1];

const Blog = () => {
    useTitle('Blog');

    const articles = [
        {
            icon: <FaLock />,
            tint: 'from-violet-600 to-fuchsia-500',
            tag: 'Security',
            title: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
            read: '6 min read',
            body: (
                <p className='mt-4 leading-relaxed text-slate-500'>
                    An access token is a short-lived credential used to authorize access to protected resources. A refresh
                    token is a long-lived credential used to obtain a new access token when the current one expires. Access
                    tokens are stored securely on the client-side, often in an HTTP-only cookie, while refresh tokens
                    require stronger protection and can be stored in an HTTP-only cookie or encrypted client-side storage.
                </p>
            ),
        },
        {
            icon: <FaDatabase />,
            tint: 'from-violet-600 to-fuchsia-500',
            tag: 'Databases',
            title: 'Compare SQL and NoSQL databases?',
            read: '8 min read',
            body: (
                <>
                    <div className='mt-5 grid gap-5 md:grid-cols-2'>
                        <div className='rounded-2xl border border-violet-100 bg-violet-50/70 p-5 transition-transform duration-300 hover:-translate-y-1'>
                            <h3 className='flex items-center gap-2 text-lg font-bold text-violet-700'>
                                <FaServer className='text-sm' /> SQL Databases
                            </h3>
                            <ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600'>
                                <li>Based on a relational data model</li>
                                <li>Use structured schemas and predefined tables</li>
                                <li>Enforce data integrity through constraints</li>
                                <li>Provide powerful querying capabilities using SQL</li>
                                <li>Well-suited for structured data and complex transactions</li>
                                <li>Examples: MySQL, PostgreSQL, Oracle</li>
                            </ul>
                        </div>

                        <div className='rounded-2xl border border-amber-100 bg-amber-50/70 p-5 transition-transform duration-300 hover:-translate-y-1'>
                            <h3 className='flex items-center gap-2 text-lg font-bold text-amber-700'>
                                <FaDatabase className='text-sm' /> NoSQL Databases
                            </h3>
                            <ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600'>
                                <li>Non-relational and offer a flexible data model</li>
                                <li>Store data in various formats (key-value pairs, documents, etc.)</li>
                                <li>Scale horizontally and handle large amounts of data efficiently</li>
                                <li>Designed for high performance, availability, and scalability</li>
                                <li>Suitable for unstructured or semi-structured data and real-time applications</li>
                                <li>Examples: MongoDB, Cassandra, Redis</li>
                            </ul>
                        </div>
                    </div>

                    <p className='mt-5 leading-relaxed text-slate-500'>
                        In summary, SQL databases excel at handling structured data and complex transactions, while NoSQL
                        databases offer flexibility, scalability, and performance advantages for unstructured or
                        semi-structured data and high-volume applications. The choice between SQL and NoSQL depends on the
                        specific project requirements, data model, and scalability needs.
                    </p>
                </>
            ),
        },
        {
            icon: <FaCode />,
            tint: 'from-violet-600 to-fuchsia-500',
            tag: 'Backend',
            title: 'What is Express.js? What is Nest.js?',
            read: '7 min read',
            body: (
                <>
                    <h3 className='mt-5 flex items-center gap-2 text-lg font-bold text-violet-700'>
                        <FaServer className='text-sm' /> Express.js
                    </h3>
                    <p className='mt-2 leading-relaxed text-slate-500'>
                        Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and
                        robust set of features for building web applications and APIs. With Express.js, developers can handle
                        routing, middleware, and HTTP request/response handling efficiently. It is widely used due to its
                        simplicity and extensibility.
                    </p>

                    <h3 className='mt-5 flex items-center gap-2 text-lg font-bold text-amber-700'>
                        <FaCode className='text-sm' /> Nest.js
                    </h3>
                    <p className='mt-2 leading-relaxed text-slate-500'>
                        Nest.js is a progressive, TypeScript-based web application framework built on top of Express.js. It
                        follows the architectural principles of Angular to create scalable and maintainable server-side
                        applications. Nest.js provides a modular structure, dependency injection, and a powerful CLI for
                        generating boilerplate code. It integrates well with TypeScript and offers features like built-in
                        validation, middleware, and extensibility.
                    </p>
                </>
            ),
        },
        {
            icon: <FaDatabase />,
            tint: 'from-violet-600 to-fuchsia-500',
            tag: 'MongoDB',
            title: 'What is MongoDB aggregate and how does it work?',
            read: '5 min read',
            body: (
                <p className='mt-4 leading-relaxed text-slate-500'>
                    MongoDB&apos;s aggregate is a versatile framework for advanced data processing. It uses a pipeline of
                    stages to transform and analyze data, allowing for complex operations like grouping, filtering, and
                    computing aggregate values. It empowers developers to derive valuable insights and perform intricate
                    data transformations within MongoDB.
                </p>
            ),
        },
    ];

    return (
        <PageTransition>
            <div className='container-x section'>
                <SectionHeading
                    eyebrow='Knowledge hub'
                    title={<>The <span className='text-gradient'>Blog</span></>}
                    subtitle='Notes, deep-dives and lessons learned from building in the wild.'
                />

                <div className='mx-auto mt-10 max-w-4xl space-y-8'>
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 46 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: index * 0.06, ease }}
                            className={`card-surface card-hover card-sheen relative overflow-hidden bg-gradient-to-b ${
                                index % 2 === 1 ? 'from-violet-50/60 to-white' : 'from-white to-white'
                            } p-6 sm:p-8`}
                        >
                            <span className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${article.tint}`}></span>

                            <div className='flex flex-wrap items-center gap-3'>
                                <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${article.tint} text-sm text-white shadow-soft`}>
                                    {article.icon}
                                </span>
                                <span className='rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-violet-700'>
                                    {article.tag}
                                </span>
                                <span className='flex items-center gap-1.5 text-xs text-slate-400'>
                                    <FaClock /> {article.read}
                                </span>
                            </div>

                            <h2 className='mt-4 text-xl font-bold text-slate-900 transition-colors duration-200 hover:text-violet-700 sm:text-2xl'>
                                {article.title}
                            </h2>

                            {article.body}
                        </motion.article>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};

export default Blog;