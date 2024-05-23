'use client';

import React, { useState, FormEvent } from 'react';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';

const Contact: React.FC = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.target as HTMLFormElement;
        const data = {
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const resData = await response.json();

            if (response.status === 200) {
                console.log('Message sent.');
                setEmailSubmitted(true);
            } else {
                throw new Error(resData.error || 'Failed to send email');
            }
        } catch (err) {
            console.error('Error sending email:', err);
            // setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative px-10'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {' '}
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best
                    to get back to you!
                </p>
                <div className="flex flex-row gap-2">
                    <a target="_blank" href="https://github.com/joshua-bake" rel="noopener noreferrer" className='flex text-white flex-row items-center my-[15px] '>
                        <RxGithubLogo /><span className='text-[15px] ml-[6px]'>GitHub</span>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/joshuaj-baker" rel="noopener noreferrer" className='flex text-white flex-row items-center my-[15px] '>
                        <RxLinkedinLogo /><span className='text-[15px] ml-[6px]'>LinkedIn</span>
                    </a>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                        {error && (
                            <p className='text-red-500 text-sm mt-2'>{error}</p>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
}

export default Contact;
