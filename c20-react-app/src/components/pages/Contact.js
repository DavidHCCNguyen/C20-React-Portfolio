import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Thank you for visiting my website! I appreciate your time and interest
        in exploring my work and projects. If you have any questions, feedback,
        or just want to chat, feel free to get in touch with me using the
        contact form below.
      </p>
      <p>
        I'm always excited to connect with fellow developers, collaborators, and
        anyone interested in technology and coding. Whether you want to discuss
        a potential project, have a technical query, or simply want to say
        hello, I'm here to listen and respond.
      </p>
      <p>
        Your input and thoughts are valuable to me, and I'm committed to
        providing the best possible experience for my visitors. I look forward
        to hearing from you and continuing this journey together.
      </p>
      <p>Thank you once again for visiting, and I hope you have a great day!</p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" />
      </div>
    </div>
  );
}
