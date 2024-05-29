import { useState } from "react";
import "./Contact.scss";

// Basic sanitization function
const sanitizeInput = (input) => {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return input.replace(/[&<>"']/g, (char) => map[char]);
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const errors = {};
    if (form.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!validateEmail(form.email)) {
      errors.email = "Email is invalid";
    }
    if (form.message.trim() === "") {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setForm({ ...form, [e.target.name]: sanitizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", form);
    // Add form submission logic here
  };

  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Contact Form</h2>

      <div className="contact-container container grid">
        {/* =======================  */}
        <div className="contact-content">
          <h3 className="contact-title">Write your inquiries/feedbacks</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-div">
              <label htmlFor="name" className="contact-form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact-form-input"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="contact-form-div">
              <label htmlFor="email" className="contact-form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="contact-form-input"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="contact-form-div contact-form-area">
              <label htmlFor="project" className="contact-form-tag">
                Projects
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="contact-form-input"
                placeholder="Describe your message"
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button className="button button-flex" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
