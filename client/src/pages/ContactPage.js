import React from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../contactpage_components/ContactPage.css';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main className="contact-page">
        <h1>Thank you for your interest!</h1>
        <p>Please reach out to your local studio directly for studio-specific inquiries, such as workshop schedules, private events, and local marketing opportunities.</p>
        <p>For all questions to the Mossy Lab Corporate Team, please use the form below to send us a message.</p>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name <span>*</span></label>
              <input type="text" id="fullName" name="fullName" required />
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="phone">Phone <span>*</span></label>
              <input type="text" id="phone" name="phone" required/>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject <span>*</span></label>
              <select id="subject" name="subject" required>
                <option value="">Choose One...</option>
                <option value="workshop">Workshop Inquiry</option>
                <option value="event">Event Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message <span>*</span></label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
