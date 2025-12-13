import React, { useState, useEffect } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { socials } from '../../constants/index.js';

const contactdeji = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    honeypot: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupAnimating, setPopupAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg(data.message || 'success');

        setShowPopup(true);

        setTimeout(() => setPopupAnimating(true), 20);

        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: '',
          honeypot: '',
        });
      } else {
        setErrorMsg(
          data.error ||
            (data.errors && data.errors.map((err) => err.msg).join(', ')) ||
            'Something went wrong.'
        );
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setPopupAnimating(false);
    setTimeout(() => {
      setShowPopup(false);
      setSuccessMsg('');
    }, 300);
  };

  const getLabelClass = (field) =>
    `absolute left-2 top-0 text-[1rem] lg:text-[0.9rem] transition-colors duration-200 ${
      formData[field] ? 'text-[#7e7e7e]' : 'text-[#ffffff]'
    }`;

  const getInputClass = (field) =>
    `w-full pt-[3rem] pb-[0.7rem] text-[1rem] lg:text-[0.9rem] px-2 border-b-2 border-gray-400 bg-transparent outline-none text-[1rem] transition-colors duration-200 ${
      formData[field] ? 'text-[#ffffff]' : 'text-[#7e7e7e]'
    }`;

  useEffect(() => {
    if (showPopup) {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
  }, [showPopup, scrollY]);

  return (
    <div className={`relative ${showPopup ? 'overflow-hidden' : ''}`}>
      {showPopup && (
        <div className="fixed inset-0 z-[14000] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40"></div>

          <div
            className={`
            relative z-[60] bg-white w-[80%] max-w-[400px] h-[40vh] lg:h-[50vh]
            px-6 pt-[1rem] lg:pt-[2.4rem] rounded-xl shadow-xl flex flex-col items-center
            transform transition-all duration-300
            ${
              popupAnimating
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }
          `}
          >
            <IoMdCheckmarkCircleOutline size={70} />

            <h2 className="text-[1.1rem] lg:text-[1rem] font-[500] text-center mt-4">
              Message sent successfully!
            </h2>

            <p className="text-[1rem] lg:text-[0.9rem] mt-2 text-center">
              I will get back to you shortly.
            </p>

            <button onClick={handleClosePopup} className="mt-6 okay-btn">
              Okay
            </button>
          </div>
        </div>
      )}
      <div
        className={`${showPopup ? 'blur-sm pointer-events-none' : ''}`}
      ></div>
      <div className="px-[1.5rem]">
        <h2 className="mt-[4rem] font-[600] text-[1.4rem] lg:pl-[9rem]">
          Ready to Build Something?
        </h2>
        <div className="flex flex-col lg:flex-row-reverse lg:justify-center gap-[5rem]">
          <div>
            <div className="lg:mt-[4rem]">
              {socials.map((med) => (
                <div
                  className="flex pt-[1.5rem] lg:pt-[2rem] gap-5"
                  key={med.id}
                >
                  <a href={med.url} target="_blank" rel="noopener noreferrer">
                    <med.media size={27} className=" text-[#1d1d1d]" />
                  </a>
                  <p className="text-[1rem] text-[#1d1d1d] font-semibold">
                    {med.username}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" w-[100%] lg:w-[40rem] px-4 py-12 lg:px-[2rem] lg:-ml-[7rem] bg-[#1c1d20] rounded-[12px] shadow-md mb-[8rem] mt-[3rem]"
          >
            <h2 className="text-2xl mb-[3rem] text-white">Work With Me</h2>

            <div className="relative w-full mb-4">
              <label className={getLabelClass('name')}>What's your name?</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className={getInputClass('name')}
              />
            </div>

            <div className="relative w-full mb-4">
              <label className={getLabelClass('email')}>
                What's your email?
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="John@Doe.com"
                required
                className={getInputClass('email')}
              />
            </div>

            <div className="relative w-full mb-4">
              <label className={getLabelClass('projectType')}>
                Project Type
              </label>
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="Ecommerce, Web app/ dashboard"
                className={getInputClass('projectType')}
              />
            </div>

            <div className="relative w-full mb-4">
              <label className={getLabelClass('message')}>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Ayodeji, can you help me with..."
                rows="5"
                required
                className={getInputClass('message') + ' resize-none'}
              ></textarea>
            </div>

            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={loading}
              className={`submit-btn w-full transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleClosePopup}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {errorMsg && (
              <div className="flex items-center justify-center gap-3 p-4 rounded-md mb-4">
                <IoMdCloseCircleOutline size={40} className="text-red-600" />

                <div className="flex flex-col ">
                  <p className="text-[1rem] font-semibold text-white">
                    Something went wrong
                  </p>
                  <p className="text-[0.9rem] text-white">{errorMsg}</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactdeji;
