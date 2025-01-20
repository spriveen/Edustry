import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send a Message <img src={msg_icon} alt="Message icon" />
        </h3>
        <p>Communicating effectively is crucial in every aspect of life.</p>
        <ul>
          <li>
            <img src={mail_icon} alt="Mail icon" /> Edusity@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone icon" /> +9862526262
          </li>
          <li>
            <img src={location_icon} alt="Location icon" /> UK London
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="Arrow icon" />
          </button>
        </form>
        <span>sending</span>
      </div>
    </div>
  );
};

export default Contact;
