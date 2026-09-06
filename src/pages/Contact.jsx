import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setError('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      navigate('/thank-you');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was a problem submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-white text-center"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-400 text-center max-w-3xl mx-auto mb-16"
      >
        Ready to take your academic career to the next level? Drop us a message and our support team will get back to you within 15 minutes.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-300">
                Full Name <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-slate-900 border rounded-xl p-4 text-white focus:outline-none transition-colors ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-amber-500'}`}
                placeholder="Enter your name"
              />
              {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-300">
                Email Address <span className="text-amber-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-slate-900 border rounded-xl p-4 text-white focus:outline-none transition-colors ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-amber-500'}`}
                placeholder="Enter your email"
              />
              {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-300">
                Project Requirements <span className="text-amber-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`bg-slate-900 border rounded-xl p-4 text-white focus:outline-none transition-colors min-h-[150px] resize-none ${formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-amber-500'}`}
                placeholder="Tell us about your subject..."
              ></textarea>
              {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <motion.a
                href="https://wa.me/917017613703?text=Hi%2C%20I%20came%20from%20Scholar%20Line%20website.%20I%20need%20help%20with%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 px-8 rounded-full font-semibold transition-colors duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)]"
              >
                <FaWhatsapp size={22} />
                Connect on WhatsApp
              </motion.a>
            </div>
            {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8 justify-center"
        >
          <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-14 h-14 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Email Us</h4>
              <p className="text-slate-400">irshadahemad.asr.ia@gmail.com</p>
              <p className="text-slate-400">scholarline.1@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-14 h-14 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Call Us</h4>
              <p className="text-slate-400">+91 7017613703</p>

            </div>
          </div>
          <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-14 h-14 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Visit Us</h4>
              <p className="text-slate-400">Mutaina, Tehsil Gunnour, Sambhal, UP – 202527</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917017613703?text=Hi%2C%20I%20came%20from%20Scholar%20Line%20website.%20I%20need%20help%20with%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] z-50 transition-colors duration-300"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    </div>
  );
}
