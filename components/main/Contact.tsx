// components/main/Contact.tsx

'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<{ success: boolean } | null>(null);

  const sendEmail = async () => {
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });

    const data = await res.json();
    setResponse(data);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
        <button type="submit" className='button text-white'>Send</button>
      </form>
      {response && (
        <p>{response.success ? 'Email sent successfully!' : 'Failed to send email'}</p>
      )}
    </div>
    //  <h5 className='text-xl font-bold text-white my-2'>Let&po;s Connect</h5>
    //         <p className='text-[#ADB7BE] mb-4 max-w-md'>
    //             {' '}
    //             `I&pos;m currently looking for new opportunities, my inbox is always open.
    //             Whether you have a question or just want to say hi, I&pos;ll try my best
    //             to get back to you!`
    //         </p>
  );
}
