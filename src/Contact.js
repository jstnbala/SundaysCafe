import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-section">
        <h2> Get in Touch with Us!</h2>
        <p>Craving great food and memories? Sundays Cafe is your spot! 🍽️</p>
        <p>📍 Locations:</p>
        <ul>
          <li>J.P. Rizal, Marikina 🏞️</li>
          <li>V. Luna Ext. - Maginhawa 🌆</li>
        </ul>
        <p>Got questions or want to reserve a table? Contact us:</p>
        <ul>
          <li>Marikina: 📞 09171572634</li>
          <li>Maginhawa: 📞 09171223189</li>
        </ul>
        <p>Join us for unforgettable moments! 🎉</p>
      </div>
      <div className="right-section">
        <div className="contact-card">
          <h2>Any Feedback?</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Your Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
