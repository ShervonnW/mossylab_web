import React, { useState } from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../contactpage_components/ContactPage.css';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(''); // 用于显示表单提交后的消息

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        const errorMessage = await response.text(); 
        setFormStatus(`Failed to send message: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('Failed to send message. Please try again later.');
    }
  };


  return (
    <div>
      <Header />
      <main className="contact-page">
        <h1>Thank you for your interest!</h1>
        <p>Please reach out to your local studio directly for studio-specific inquiries, such as workshop schedules, private events, and local marketing opportunities.</p>
        <p>For all questions to the Mossy Lab Corporate Team, please use the form below to send us a message.</p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name <span>*</span></label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="phone">Phone <span>*</span></label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject <span>*</span></label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="">Choose One...</option>
                <option value="workshop">Workshop Inquiry</option>
                <option value="event">Event Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message <span>*</span></label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          {formStatus && <p>{formStatus}</p>} {/* 显示表单提交的结果 */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
