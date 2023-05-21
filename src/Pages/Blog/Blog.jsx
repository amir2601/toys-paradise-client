import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog');

    return (
        <div className='my-8 px-4 lg:px-0'>
            <h2 className='text-3xl font-bold my-8 text-center'>Blog</h2>
            <div className='space-y-5'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-primary'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>
                        An access token is a short-lived credential used to authorize access to protected resources. A refresh token is a long-lived credential used to obtain a new access token when the current one expires. Access tokens are stored securely on the client-side, often in an HTTP-only cookie, while refresh tokens require stronger protection and can be stored in an HTTP-only cookie or encrypted client-side storage.
                    </p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold text-primary'>Compare SQL and NoSQL databases?</h2>
                    <h2 className='text-xl font-bold text-primary'>SQL Databases:</h2>
                    <ul className='space-y-2'>
                        <li>Based on a relational data model</li>
                        <li>Use structured schemas and predefined tables</li>
                        <li>Enforce data integrity through constraints</li>
                        <li>Provide powerful querying capabilities using SQL</li>
                        <li>Well-suited for structured data and complex transactions</li>
                        <li>Examples: MySQL, PostgreSQL, Oracle</li>
                    </ul>

                    <h2 className='text-xl font-bold text-primary'>NoSQL Databases:</h2>
                    <ul className='space-y-2'>
                        <li>Non-relational and offer a flexible data model</li>
                        <li>Store data in various formats (key-value pairs, documents, etc.)</li>
                        <li>Scale horizontally and handle large amounts of data efficiently</li>
                        <li>Designed for high performance, availability, and scalability</li>
                        <li>Suitable for unstructured or semi-structured data and real-time applications</li>
                        <li>Examples: MongoDB, Cassandra, Redis</li>
                    </ul>

                    <p>In summary, SQL databases excel at handling structured data and complex transactions, while NoSQL databases offer flexibility, scalability, and performance advantages for unstructured or semi-structured data and high-volume applications. The choice between SQL and NoSQL depends on the specific project requirements, data model, and scalability needs.</p>
                </div>
                <div className='space-y-5'>
                    <h2 className='text-2xl font-bold text-primary'>What is express js? What is Nest JS</h2>
                    <h2 className='text-xl font-bold text-primary'>Express.js:</h2>
                    <p>
                        Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and robust set of features for building web applications and APIs. With Express.js, developers can handle routing, middleware, and HTTP request/response handling efficiently. It is widely used due to its simplicity and extensibility.
                    </p>
                    <h2 className='text-xl font-bold text-primary'>Nest.js:</h2>
                    <p>
                        Nest.js is a progressive, TypeScript-based web application framework built on top of Express.js. It follows the architectural principles of Angular to create scalable and maintainable server-side applications. Nest.js provides a modular structure, dependency injection, and a powerful CLI for generating boilerplate code. It integrates well with TypeScript and offers features like built-in validation, middleware, and extensibility.
                    </p>
                </div>
                <div className='space-y-5'>
                    <h2 className='text-2xl font-bold text-primary'>What is MongoDB aggregate and how does it work</h2>
                    <p>
                        MongoDB's aggregate is a versatile framework for advanced data processing. It uses a pipeline of stages to transform and analyze data, allowing for complex operations like grouping, filtering, and computing aggregate values. It empowers developers to derive valuable insights and perform intricate data transformations within MongoDB.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;