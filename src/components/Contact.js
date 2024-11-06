import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const PUBLIC_KEY = 'ilVyNo8cw2x1msfRD';

const Contact = () => {
    const formRef = useRef(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await emailjs.sendForm('contact_service', 'contact_form', formRef.current);
            setMessage('Message sent successfully!');
            formRef.current.reset(); //reset form
        } catch (error) {
            console.error('FAILED...', error);
            setMessage('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className='min-h-screen p-4 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400'>
            <form 
                id="contact-form" 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="max-w-lg mx-auto p-6 bg-slate-400 border-gray-50 rounded-lg shadow-lg mt-6"
            >
                <input type="hidden" name="contact_number" value="697483" />
                <div className="mb-4">
                    <label htmlFor="user_name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        required
                        id="user_name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        id="user_email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea
                        name="message"
                        required
                        id="message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="submit"
                        value="Send"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                </div>
                {message && (
                    <div className="text-center text-gray-700 mt-4">
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Contact;
