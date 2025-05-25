import React, { useState } from 'react';
import { Headings } from '../../components';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    type: 'Say Hi',
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (e) => {
    setFormData((prev) => ({ ...prev, type: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { type, name, email, mobile, message } = formData;
    const phoneNumber = '919427445155'; // Replace with your WhatsApp number (with country code)

    const fullMessage = `*${type}*\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="section-padding">
      <Headings
        title="Contact Us"
        text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />

      <div className="contact" id="quote">
        <div className="row">
          <div className="col-md-6 col-12">
            <form onSubmit={handleSubmit}>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="inlineRadio1"
                  value="Say Hi"
                  checked={formData.type === 'Say Hi'}
                  onChange={handleTypeChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Say Hi
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="inlineRadio2"
                  value="Get a Quote"
                  checked={formData.type === 'Get a Quote'}
                  onChange={handleTypeChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Get a Quote
                </label>
              </div>

              <div className="form-group">
                <label>Name*</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email*</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mo.No</label>
                <input
                  className="form-control"
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message*</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-positivus w-100">
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
